"use client";

export function PrintResumeButton() {
  return <button type="button" className="proj-button" onClick={() => window.print()}>Печать / сохранить в PDF ↗</button>;
}
