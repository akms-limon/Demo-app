"use client";
import CheckList from "@/components/CheckList";

// Choose which content blocks go into this JSONL run.
export default function BlockSelector({ packs, selected, onChange }) {
  const sorted = [...packs].sort((a, b) => a.order - b.order);
  const toggle = (key) =>
    onChange(selected.includes(key) ? selected.filter((k) => k !== key) : [...selected, key]);

  return (
    <section className="panel">
      <h2>Content blocks</h2>
      <p className="muted small">{selected.length} of {packs.length} selected</p>
      <CheckList
        items={sorted.map((p) => ({ key: p.key, label: p.name, hint: p.idMapping.replace("js-ai-content-", "") }))}
        selected={selected}
        onToggle={toggle}
        onSelectAll={() => onChange(packs.map((p) => p.key))}
        onClear={() => onChange([])}
        emptyText="No prompt packs in data/promptPacks.js."
      />
    </section>
  );
}
