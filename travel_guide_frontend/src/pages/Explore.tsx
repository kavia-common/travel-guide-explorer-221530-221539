import React, { useMemo, useState } from "react";
import { mockDestinations, Destination } from "../data/destinations";
import { DestinationCard } from "../components/DestinationCard";
import { SearchBar } from "../components/SearchBar";
import { Header } from "../components/Header";
import { SidebarPlan } from "../components/SidebarPlan";

/**
 * PUBLIC_INTERFACE
 * ExplorePage
 * Home page with search, destination grid and trip planning sidebar.
 */
export const ExplorePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [plan, setPlan] = useState<Destination[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mockDestinations;
    return mockDestinations.filter((d) => {
      return (
        d.title.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q)) ||
        d.description.toLowerCase().includes(q)
      );
    });
  }, [query]);

  const inPlan = (id: string) => plan.some((p) => p.id === id);
  const addToPlan = (d: Destination) => {
    if (inPlan(d.id)) return;
    setPlan((p) => [...p, d]);
  };
  const removeFromPlan = (d: Destination) => {
    setPlan((p) => p.filter((x) => x.id !== d.id));
  };

  return (
    <div className="app-shell">
      <Header onOpenDrawer={() => setDrawerOpen(true)} />
      <main className="main">
        <section>
          <div className="card" style={{ padding: 12, marginBottom: 12 }}>
            <SearchBar query={query} onChange={setQuery} />
          </div>
          <div className="grid" aria-live="polite">
            {filtered.map((d) => (
              <DestinationCard
                key={d.id}
                destination={d}
                inPlan={inPlan(d.id)}
                onAdd={addToPlan}
                onRemove={removeFromPlan}
              />
            ))}
          </div>
        </section>
        <SidebarPlan plan={plan} onRemove={removeFromPlan} />
      </main>

      {/* Drawer for small screens */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Trip plan drawer">
        <div className="drawer-header">
          <strong>Trip Plan</strong>
          <button className="btn secondary" onClick={() => setDrawerOpen(false)} aria-label="Close">
            Close
          </button>
        </div>
        <div className="drawer-body">
          <SidebarPlan plan={plan} onRemove={removeFromPlan} />
        </div>
      </div>
    </div>
  );
};
