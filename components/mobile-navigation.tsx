type MobileNavigationProps = {
  items: string[];
  targets: string[];
};

/**
 * Always-visible mobile navigation.
 * Avoid a drop-down that covers the first screen and prevents scanning.
 */
export function MobileNavigation({ items, targets }: MobileNavigationProps) {
  return (
    <nav className="mobile-direct-nav" aria-label="Навигация по портфолио">
      {items.map((item, index) => (
        <a key={targets[index]} href={`#${targets[index]}`}>{item}</a>
      ))}
    </nav>
  );
}
