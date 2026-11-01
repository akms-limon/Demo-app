import { LAYER_FIELDS } from "@/data/promptPacks";

// Matches {Location}, {Regions}, {Cities}, {cities}, {Count}.
// Letters only, so JSON such as {"Title": ""} is never touched.
const PLACEHOLDER = /\{([A-Za-z_]+)\}/g;

// Placeholder name (lowercase) -> field on the location record.
const FIELD_FOR = {
  location: "location",
  regions: "regions",
  cities: "cities",
  count: "count",
};

// Join all non-empty layers into one template string.
export function joinLayers(pack, order, total) {
  return LAYER_FIELDS.map((f) => (pack.layers[f.key] || "").trim())
    .filter(Boolean)
    .join("\n")
    .replace(/#X of Y/g, `#${order} of ${total}`);
}

// Fill placeholders. Returns:
//   text     the final string
//   segments [{ text, kind }]  kind = "plain" | "filled" | "missing" (for highlighting)
//   missing  names of placeholders that could not be filled
export function assemblePrompt(pack, location, totalBlocks) {
  const template = joinLayers(pack, pack.order, totalBlocks);
  const segments = [];
  const missing = [];
  let last = 0;
  let m;
  PLACEHOLDER.lastIndex = 0;

  while ((m = PLACEHOLDER.exec(template)) !== null) {
    if (m.index > last) segments.push({ text: template.slice(last, m.index), kind: "plain" });
    const field = FIELD_FOR[m[1].toLowerCase()];
    const value = field && location ? String(location[field] ?? "").trim() : "";
    if (value) {
      segments.push({ text: value, kind: "filled" });
    } else {
      segments.push({ text: m[0], kind: "missing" });
      if (!missing.includes(m[0])) missing.push(m[0]);
    }
    last = m.index + m[0].length;
  }
  if (last < template.length) segments.push({ text: template.slice(last), kind: "plain" });

  return { text: segments.map((s) => s.text).join(""), segments, missing };
}
