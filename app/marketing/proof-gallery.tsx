"use client";

import { useEffect, useState } from "react";

type ProofItem = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export default function ProofGallery({
  items,
  className = "",
}: {
  items: ProofItem[];
  className?: string;
}) {
  const [active, setActive] = useState<ProofItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [active]);

  return (
    <>
      <div className={className}>
        {items.map((item) => (
          <figure className={item.className || ""} key={item.src + item.alt}>
            <button
              className="proof-image-button"
              type="button"
              onClick={() => setActive(item)}
              aria-label={`Увеличить: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span>Увеличить ↗</span>
            </button>
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        ))}
      </div>

      {active ? (
        <div
          className="proof-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActive(null);
          }}
        >
          <button
            type="button"
            className="proof-lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Закрыть"
          >
            ×
          </button>
          <div className="proof-lightbox-inner">
            <img src={active.src} alt={active.alt} />
            {active.caption ? <p>{active.caption}</p> : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
