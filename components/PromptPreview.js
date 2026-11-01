"use client";
import { assemblePrompt } from "@/lib/buildPrompt";

// Shows the final system prompt for the active pack + active location.
// Green = placeholder filled. Red = placeholder with no value.
export default function PromptPreview({ pack, location, totalBlocks }) {
  if (!pack || !location) {
    return (
      <section className="panel">
        <h2>Prompt preview</h2>
        <p className="muted">Pick a content block and a location to see the prompt.</p>
      </section>
    );
  }

  const { segments, missing } = assemblePrompt(pack, location, totalBlocks);

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Prompt preview</h2>
        <span className="muted small">{pack.name} for {location.location || "(unnamed)"}</span>
      </div>

      {missing.length > 0 && (
        <p className="alert">Missing values: {missing.join(", ")}. Fill them in Location data.</p>
      )}

      <pre className="prompt">
        {segments.map((s, i) =>
          s.kind === "plain" ? (
            <span key={i}>{s.text}</span>
          ) : (
            <mark key={i} className={s.kind}>{s.text}</mark>
          )
        )}
      </pre>
    </section>
  );
}
