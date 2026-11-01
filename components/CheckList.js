"use client";

// Small reusable multi-select list. Used by BlockSelector and LocationSelector.
// items: [{ key, label, hint }]
// Layout styles are inline on purpose, so the list looks right even if the CSS file is stale.
const labelStyle = {
  display: "flex",
  alignItems: "start",
  gap: 10,
  width: "100%",
  padding: "6px 4px",
  cursor: "pointer",
  textAlign: "left",
};
const boxStyle = { width: 16, minWidth: 16, maxWidth: 16, height: 16, margin: 0, padding: 0 };
const copyStyle = { minWidth: 0, flex: "1 1 auto" };
const textStyle = { display: "block", fontSize: 14, lineHeight: 1.35 };
const hintStyle = {
  display: "block",
  fontFamily: "ui-monospace, Menlo, Consolas, monospace",
  fontSize: 11,
  color: "#7b8896",
  overflowWrap: "anywhere",
};

export default function CheckList({ items, selected, onToggle, onSelectAll, onClear, emptyText }) {
  return (
    <div>
      <div className="row-actions">
        <button type="button" className="link-btn" onClick={onSelectAll}>Select all</button>
        <button type="button" className="link-btn" onClick={onClear}>Clear</button>
      </div>
      {items.length === 0 && <p className="muted">{emptyText}</p>}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, width: "100%" }}>
        {items.map((item) => (
          <li key={item.key} style={{ display: "block", width: "100%" }}>
            <label style={labelStyle}>
              <input
                type="checkbox"
                style={boxStyle}
                checked={selected.includes(item.key)}
                onChange={() => onToggle(item.key)}
              />
              <span style={copyStyle}>
                <span style={textStyle}>{item.label}</span>
                {item.hint && <span style={hintStyle}>{item.hint}</span>}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}