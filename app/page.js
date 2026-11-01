"use client";
import { useMemo, useState } from "react";

import { promptPacks as initialPacks, defaultSelectedBlocks } from "@/data/promptPacks";
import { locations as initialLocations, defaultSelectedLocations } from "@/data/locations";
import { buildJobs } from "@/lib/buildJsonl";

import BlockSelector from "@/components/BlockSelector";
import LocationSelector from "@/components/LocationSelector";
import PromptPackEditor from "@/components/PromptPackEditor";
import LocationEditor from "@/components/LocationEditor";
import PromptPreview from "@/components/PromptPreview";
import JsonlOutput from "@/components/JsonlOutput";

// All shared state lives here. Every component gets data + callbacks as props,
// and the preview and JSONL are computed from this state on each render.
export default function Home() {
  const [packs, setPacks] = useState(initialPacks);
  const [locations, setLocations] = useState(initialLocations);
  const [selectedBlocks, setSelectedBlocks] = useState(defaultSelectedBlocks);
  const [selectedLocations, setSelectedLocations] = useState(defaultSelectedLocations);
  const [activePackKey, setActivePackKey] = useState(initialPacks[0]?.key ?? "");
  const [activeLocationKey, setActiveLocationKey] = useState(initialLocations[0]?.key ?? "");

  const activePack = packs.find((p) => p.key === activePackKey);
  const activeLocation = locations.find((l) => l.key === activeLocationKey);

  const jobs = useMemo(
    () => buildJobs({ packs, locations, selectedBlocks, selectedLocations }),
    [packs, locations, selectedBlocks, selectedLocations]
  );

  const updatePackField = (key, field, value) =>
    setPacks((all) => all.map((p) => (p.key === key ? { ...p, [field]: value } : p)));

  const updatePackLayer = (key, layer, value) =>
    setPacks((all) =>
      all.map((p) => (p.key === key ? { ...p, layers: { ...p.layers, [layer]: value } } : p))
    );

  const updateLocation = (key, patch) =>
    setLocations((all) => all.map((l) => (l.key === key ? { ...l, ...patch } : l)));

  const addLocation = () => {
    const key = `custom-${Date.now()}`;
    setLocations((all) => [
      ...all,
      { key, id: "", slugs: [], location: "New location", regions: "", cities: "", count: "4-8" },
    ]);
    setSelectedLocations((s) => [...s, key]);
    setActiveLocationKey(key);
  };

  const removeLocation = (key) => {
    const rest = locations.filter((l) => l.key !== key);
    setLocations(rest);
    setSelectedLocations((s) => s.filter((k) => k !== key));
    if (activeLocationKey === key) setActiveLocationKey(rest[0]?.key ?? "");
  };

  const resetAll = () => {
    setPacks(initialPacks);
    setLocations(initialLocations);
    setSelectedBlocks(defaultSelectedBlocks);
    setSelectedLocations(defaultSelectedLocations);
    setActivePackKey(initialPacks[0]?.key ?? "");
    setActiveLocationKey(initialLocations[0]?.key ?? "");
  };

  return (
    <div className="shell">
      <header className="top">
        <div>
          <h1>Country Page JSONL builder</h1>
          <p className="muted">
            Pick blocks and locations, adjust the prompts, then download one file with a line for every pair.
          </p>
        </div>
        <button type="button" className="btn" onClick={resetAll}>Reset to defaults</button>
      </header>

      <div className="layout">
        <aside className="rail">
          <BlockSelector packs={packs} selected={selectedBlocks} onChange={setSelectedBlocks} />
          <LocationSelector locations={locations} selected={selectedLocations} onChange={setSelectedLocations} />
        </aside>

        <main className="main">
          <JsonlOutput jobs={jobs} packs={packs} locations={locations} />
          <PromptPreview pack={activePack} location={activeLocation} totalBlocks={packs.length} />
          <PromptPackEditor
            packs={packs}
            activeKey={activePackKey}
            onActiveChange={setActivePackKey}
            onChangeField={updatePackField}
            onChangeLayer={updatePackLayer}
          />
          <LocationEditor
            locations={locations}
            activeKey={activeLocationKey}
            onActiveChange={setActiveLocationKey}
            onChange={updateLocation}
            onAdd={addLocation}
            onRemove={removeLocation}
          />
        </main>
      </div>
    </div>
  );
}
