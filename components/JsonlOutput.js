"use client";
import { useState } from "react";
import { jobsToJsonl } from "@/lib/buildJsonl";

// Shows one JSONL line per selected (location x block) pair, with copy and download.
export default function JsonlOutput({ jobs, packs, locations }) {
  const [copied, setCopied] = useState(false);
  const jsonl = jobsToJsonl(jobs);
  const warnings = jobs.flatMap((j) => j.warnings);

  const nameOf = (list, key, field) => list.find((x) => x.key === key)?.[field] ?? key;

  async function copy() {
    try {
      await navigator.clipboard.writeText(jsonl);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = jsonl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  function download() {
    const blob = new Blob([jsonl], { type: "application/x-ndjson" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "country-page-batch.jsonl";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="panel output">
      <div className="panel-head">
        <h2>JSONL output</h2>
        <div className="head-actions">
          <span className="count">{jobs.length} {jobs.length === 1 ? "line" : "lines"}</span>
          <button type="button" className="btn" onClick={copy} disabled={!jobs.length}>
            {copied ? "Copied" : "Copy"}
          </button>
          <button type="button" className="btn primary" onClick={download} disabled={!jobs.length}>
            Download .jsonl
          </button>
        </div>
      </div>

      {warnings.length > 0 && (
        <div className="alert">
          <strong>{warnings.length} problem{warnings.length === 1 ? "" : "s"} to fix before using this file</strong>
          <ul>
            {warnings.slice(0, 6).map((w, i) => <li key={i}>{w}</li>)}
            {warnings.length > 6 && <li>and {warnings.length - 6} more</li>}
          </ul>
        </div>
      )}

      {jobs.length === 0 ? (
        <p className="empty-state">Select at least one content block and one location to prepare lines.</p>
      ) : (
        <ol className="lines">
          {jobs.map((j, i) => (
            <li key={j.customId + i}>
              <div className="line-head">
                <span className="line-no">{i + 1}</span>
                <span>{nameOf(locations, j.locationKey, "location")}</span>
                <span className="sep">/</span>
                <span>{nameOf(packs, j.packKey, "name")}</span>
              </div>
              <pre className="line-body">{j.line}</pre>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
