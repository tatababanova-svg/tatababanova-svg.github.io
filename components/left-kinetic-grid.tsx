"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const COLUMNS = 6;
const CELL_COUNT = 270;
const CELLS = Array.from({ length: CELL_COUNT }, (_, index) => ({
  index,
  row: Math.floor(index / COLUMNS),
  col: index % COLUMNS,
}));

/**
 * Decorative but interactive kinetic-grid rail.
 * Scroll moves the geometric field; mouse proximity activates neighboring tiles.
 * No copy, personal data, or inaccessible vertical captions.
 */
export function LeftKineticGrid() {
  const railRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const grid = rail.querySelector<HTMLElement>(".kg-grid");
    const cells = grid?.querySelectorAll<HTMLElement>(".kg-cell");
    if (!grid || !cells) return;

    let frame = 0;
    let lastIndex = -1;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateScroll = () => {
      frame = 0;
      if (reducedMotion.matches) return;
      const offset = Math.sin(window.scrollY / 185) * 18;
      rail.style.setProperty("--kg-scroll-y", offset.toFixed(1) + "px");
      rail.style.setProperty("--kg-scroll-progress", Math.min(100, window.scrollY / 70).toFixed(2) + "%");
    };
    const handleScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updateScroll);
    };

    const clearHot = () => {
      if (lastIndex < 0) return;
      grid.querySelectorAll<HTMLElement>(".kg-cell[data-hot]").forEach((tile) => tile.removeAttribute("data-hot"));
      lastIndex = -1;
    };

    const handleMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reducedMotion.matches) return;
      const rect = rail.getBoundingClientRect();
      rail.style.setProperty("--kg-pointer-x", ((event.clientX - rect.left) / rect.width * 100).toFixed(1) + "%");
      rail.style.setProperty("--kg-pointer-y", ((event.clientY - rect.top) / rect.height * 100).toFixed(1) + "%");
      const source = event.target;
      if (!(source instanceof Element)) return;
      const target = source.closest<HTMLElement>(".kg-cell");
      if (!target) { clearHot(); return; }
      const active = Number(target.dataset.index);
      if (active === lastIndex) return;
      clearHot();
      lastIndex = active;
      const row = Math.floor(active / COLUMNS);
      const col = active % COLUMNS;
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const dist = Math.abs(dx) + Math.abs(dy);
          if (dist > 3) continue;
          const y = row + dy;
          const x = col + dx;
          if (x < 0 || x >= COLUMNS || y < 0) continue;
          const node = cells[y * COLUMNS + x];
          if (node) node.dataset.hot = dist <= 1 ? "strong" : "near";
        }
      }
    };
    const handleExit = () => {
      clearHot();
      rail.style.setProperty("--kg-pointer-x", "50%");
      rail.style.setProperty("--kg-pointer-y", "50%");
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    rail.addEventListener("pointermove", handleMove);
    rail.addEventListener("pointerleave", handleExit);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      rail.removeEventListener("pointermove", handleMove);
      rail.removeEventListener("pointerleave", handleExit);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <aside className="left-kinetic-grid" ref={railRef} aria-hidden="true">
      <div className="kg-glow" />
      <div className="kg-grid">
        {CELLS.map(({index, row, col}) => (
          <span className="kg-cell"
            data-index={index}
            key={index}
            style={{
              "--kg-delay": "-" + ((row + col) * 0.095).toFixed(2) + "s",
              "--kg-scale": (index % 17 === 0 ? 1.10 : 1).toString(),
            } as CSSProperties}
          ><span className="kg-tile" /></span>
        ))}
      </div>
      <div className="kg-bottom-fade" />
    </aside>
  );
}
