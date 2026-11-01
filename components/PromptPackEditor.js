"use client";
import { LAYER_FIELDS } from "@/data/promptPacks";

// View and edit the active prompt pack: settings + every text layer.
// Edits go straight to the shared state, so preview and JSONL update instantly.
export default function PromptPackEditor({ packs, activeKey, onActiveChange, onChangeField, onChangeLayer }) {
  const sorted = [...packs].sort((a, b) => a.order - b.order);
  const pack = packs.find((p) => p.key === activeKey);

  return (
    <section className="panel">
      <h2>Prompt pack</h2>

      <div className="tabs" role="tablist" aria-label="Content block">
        {sorted.map((p) => (
          <button
            key={p.key}
            type="button"
            role="tab"
            aria-selected={p.key === activeKey}
            className={p.key === activeKey ? "tab active" : "tab"}
            onClick={() => onActiveChange(p.key)}
          >
            {p.name}
          </button>
        ))}
      </div>

      {!pack ? (
        <p className="muted">Pick a content block.</p>
      ) : (
        <div key={pack.key}>
          <div className="grid-4">
            <label className="field span-2">
              <span>ID Mapping</span>
              <input value={pack.idMapping} onChange={(e) => onChangeField(pack.key, "idMapping", e.target.value)} />
            </label>
            <label className="field">
              <span>Model</span>
              <input value={pack.model} onChange={(e) => onChangeField(pack.key, "model", e.target.value)} />
            </label>
            <label className="field">
              <span>Max tokens</span>
              <input
                inputMode="numeric"
                placeholder="1000 (default)"
                value={pack.maxTokens ?? ""}
                onChange={(e) => onChangeField(pack.key, "maxTokens", e.target.value)}
              />
            </label>
            <label className="field">
              <span>Temperature</span>
              <input
                inputMode="decimal"
                placeholder="1 (default)"
                value={pack.temperature ?? ""}
                onChange={(e) => onChangeField(pack.key, "temperature", e.target.value)}
              />
            </label>
            <div className="field span-3">
              <span>Placeholders this block needs</span>
              <div className="chips">
                {pack.placeholders.map((ph) => (
                  <code key={ph} className="chip">{ph}</code>
                ))}
              </div>
            </div>
          </div>

          {LAYER_FIELDS.map((f) => (
            <label className="field" key={f.key}>
              <span>
                {f.label}
                {f.key === "task" && <em className="req"> main instruction</em>}
                {!(pack.layers[f.key] || "").trim() && <em className="empty"> empty, skipped</em>}
              </span>
              <textarea
                rows={f.rows}
                value={pack.layers[f.key] || ""}
                onChange={(e) => onChangeLayer(pack.key, f.key, e.target.value)}
              />
            </label>
          ))}
        </div>
      )}
    </section>
  );
}
