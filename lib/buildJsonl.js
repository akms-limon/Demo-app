import { assemblePrompt } from "@/lib/buildPrompt";
import {
  CUSTOM_ID_SEPARATOR,
  DEFAULT_MAX_TOKENS,
  DEFAULT_TEMPERATURE,
  EXTRA_BODY,
  REQUEST_METHOD,
  REQUEST_URL,
} from "@/lib/config";

// ['usa', 'south-carolina'] -> "['usa', 'south-carolina']"
export function stringifySlugs(slugs) {
  return `[${slugs.map((s) => `'${s}'`).join(", ")}]`;
}

export function buildCustomId(location, pack) {
  return [location.id, pack.idMapping, stringifySlugs(location.slugs)].join(CUSTOM_ID_SEPARATOR);
}

function toNumber(value, fallback) {
  if (value === null || value === undefined || String(value).trim() === "") return fallback;
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

// One JSONL job for one (location x content block) pair.
export function buildJob(pack, location, totalBlocks) {
  const { text, missing } = assemblePrompt(pack, location, totalBlocks);
  const warnings = missing.map((p) => `${p} has no value for ${location.location || location.key}`);
  if (!String(location.id).trim()) warnings.push(`id is empty for ${location.location || location.key}`);
  if (!pack.idMapping.trim()) warnings.push(`ID Mapping is empty for ${pack.name}`);

  const object = {
    custom_id: buildCustomId(location, pack),
    method: REQUEST_METHOD,
    url: REQUEST_URL,
    body: {
      model: pack.model,
      messages: [
        { role: "system", content: text },
        { role: "user", content: "" },
      ],
      temperature: toNumber(pack.temperature, DEFAULT_TEMPERATURE),
      max_completion_tokens: toNumber(pack.maxTokens, DEFAULT_MAX_TOKENS),
      ...EXTRA_BODY,
    },
  };

  return {
    packKey: pack.key,
    locationKey: location.key,
    customId: object.custom_id,
    line: JSON.stringify(object), // always one line: newlines inside strings become \n
    warnings,
  };
}

// All selected locations x all selected blocks.
// Order: location by location, blocks in page order.
export function buildJobs({ packs, locations, selectedBlocks, selectedLocations }) {
  const activePacks = [...packs]
    .filter((p) => selectedBlocks.includes(p.key))
    .sort((a, b) => a.order - b.order);
  const activeLocations = locations.filter((l) => selectedLocations.includes(l.key));

  const jobs = [];
  for (const location of activeLocations) {
    for (const pack of activePacks) {
      jobs.push(buildJob(pack, location, packs.length));
    }
  }
  return jobs;
}

export function jobsToJsonl(jobs) {
  return jobs.map((j) => j.line).join("\n") + (jobs.length ? "\n" : "");
}
