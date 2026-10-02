"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  fallback: string;
};

export default function SafeImage({ src, alt, fallback }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="marketing-image-fallback" role="img" aria-label={alt}>
        <span>Материал проекта</span>
        <strong>{fallback}</strong>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
