"use client";
import CheckList from "@/components/CheckList";

// Choose which locations go into this JSONL run.
export default function LocationSelector({ locations, selected, onChange }) {
  const toggle = (key) =>
    onChange(selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key]);

  return (
    <section className="panel">
      <h2>Locations</h2>
      <p className="muted small">{selected.length} of {locations.length} selected</p>
      <CheckList
        items={locations.map((l) => ({ key: l.key, label: l.location || "(unnamed)", hint: l.id }))}
        selected={selected}
        onToggle={toggle}
        onSelectAll={() => onChange(locations.map((l) => l.key))}
        onClear={() => onChange([])}
        emptyText="No locations in data/locations.js."
      />
    </section>
  );
}
