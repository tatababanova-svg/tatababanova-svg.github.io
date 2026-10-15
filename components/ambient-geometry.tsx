/** Purely decorative, quiet project geometry. No sideways text and no labels. */
export function AmbientGeometry() {
  return (
    <div className="site-ambient" aria-hidden="true">
      <div className="site-ambient-art site-ambient-art-left">
        <svg viewBox="0 0 144 288" fill="none" focusable="false">
          <circle className="ambient-ring ambient-ring-a" cx="72" cy="72" r="53" stroke="currentColor" strokeWidth="1.5"/>
          <circle className="ambient-ring ambient-ring-b" cx="72" cy="72" r="31" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="72" cy="72" r="8" fill="currentColor"/>
          <circle className="ambient-pulse" cx="72" cy="19" r="7" fill="#7da58a"/>
          <path d="M72 133 V165 M72 165 L37 207 M72 165 L107 207" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="24" y="208" width="27" height="27" rx="7" fill="#dce9e0" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="107" cy="221" r="14" fill="#dce9e0" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M29 266 H115" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="site-ambient-art site-ambient-art-right">
        <svg viewBox="0 0 144 288" fill="none" focusable="false">
          <path className="ambient-figure" d="M72 23 L122 73 L72 123 L22 73 Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M72 47 L97 73 L72 98 L47 73 Z" fill="#dbe9de" stroke="currentColor" strokeWidth="1.3"/>
          <circle className="ambient-pulse" cx="72" cy="73" r="7" fill="#699678"/>
          <path d="M72 123 V171" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M25 231 L51 203 L75 215 L117 169" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="25" cy="231" r="6" fill="#dbe9de" stroke="currentColor" strokeWidth="1.4"/>
          <circle cx="51" cy="203" r="6" fill="#dbe9de" stroke="currentColor" strokeWidth="1.4"/>
          <circle cx="75" cy="215" r="6" fill="#dbe9de" stroke="currentColor" strokeWidth="1.4"/>
          <circle className="ambient-pulse" cx="117" cy="169" r="8" fill="#699678"/>
        </svg>
      </div>
    </div>
  );
}
