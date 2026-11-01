"use client";
import { useState } from "react";

// slugs are stored as an array but edited as "usa, south-carolina".
// Local draft text keeps the cursor happy while typing commas.
function SlugsInput({ slugs, onChange }) {
  const [draft, setDraft] = useState(slugs.join(", "));
  return (
    <input
      value={draft}
      placeholder="usa, south-carolina"
      onChange={(e) => {
        setDraft(e.target.value);
        onChange(e.target.value.split(",").map((s) => s.trim()).filter(Boolean));
      }}
    />
  );
}

// View and edit the placeholder values for one location. Can also add or remove locations.
export default function LocationEditor({ locations, activeKey, onActiveChange, onChange, onAdd, onRemove }) {
  const loc = locations.find((l) => l.key === activeKey);

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Location data</h2>
        <div className="head-actions">
          <select
            aria-label="Location to edit"
            value={activeKey}
            onChange={(e) => onActiveChange(e.target.value)}
          >
            {locations.map((l) => (
              <option key={l.key} value={l.key}>{l.location || "(unnamed)"}</option>
            ))}
          </select>
          <button type="button" className="btn" onClick={onAdd}>Add location</button>
        </div>
      </div>

      {!loc ? (
        <p className="muted">No locations yet. Add one to start.</p>
      ) : (
        <div key={loc.key}>
          <div className="grid-4">
            <label className="field">
              <span>id</span>
              <input value={loc.id} onChange={(e) => onChange(loc.key, { id: e.target.value })} />
            </label>
            <label className="field">
              <span>Location</span>
              <input value={loc.location} onChange={(e) => onChange(loc.key, { location: e.target.value })} />
            </label>
            <label className="field">
              <span>slugs</span>
              <SlugsInput slugs={loc.slugs} onChange={(slugs) => onChange(loc.key, { slugs })} />
            </label>
            <label className="field">
              <span>Count</span>
              <input value={loc.count} onChange={(e) => onChange(loc.key, { count: e.target.value })} />
            </label>
            <label className="field span-2">
              <span>Regions</span>
              <input value={loc.regions} onChange={(e) => onChange(loc.key, { regions: e.target.value })} />
            </label>
            <label className="field span-2">
              <span>Cities</span>
              <input value={loc.cities} onChange={(e) => onChange(loc.key, { cities: e.target.value })} />
            </label>
          </div>
          <button type="button" className="link-btn danger" onClick={() => onRemove(loc.key)}>
            Remove this location
          </button>
        </div>
      )}
    </section>
  );
}
