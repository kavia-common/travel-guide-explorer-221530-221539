import React from "react";
import { Destination } from "../data/destinations";

/**
 * PUBLIC_INTERFACE
 * DestinationCard
 * Shows a destination image, title, description, rating, and action button.
 */
export const DestinationCard: React.FC<{
  destination: Destination;
  inPlan?: boolean;
  onAdd: (d: Destination) => void;
  onRemove: (d: Destination) => void;
}> = ({ destination, inPlan, onAdd, onRemove }) => {
  const handle = () => (inPlan ? onRemove(destination) : onAdd(destination));

  return (
    <article className="card" aria-label={destination.title}>
      <div style={{ position: "relative" }}>
        <img
          src={destination.image}
          alt={destination.title}
          style={{
            width: "100%",
            height: 160,
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          className="badge"
          style={{ position: "absolute", top: 10, left: 10, backdropFilter: "blur(2px)" }}
        >
          <span style={{ width: 8, height: 8, background: "var(--color-secondary)", borderRadius: 999 }} />
          {destination.country}
        </div>
      </div>
      <div style={{ padding: 12, display: "grid", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <h3 style={{ margin: 0, fontSize: 16 }}>{destination.title}</h3>
          <span className="rating" aria-label={`Rating ${destination.rating} out of 5`}>
            ⭐ {destination.rating.toFixed(1)}
          </span>
        </div>
        <p style={{ margin: 0, color: "rgba(17,24,39,0.72)", fontSize: 13, lineHeight: 1.4 }}>
          {destination.description}
        </p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {destination.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              style={{
                background: "rgba(245, 158, 11, 0.12)",
                color: "var(--color-secondary)",
                padding: "2px 8px",
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              #{t}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 }}>
          <button className="btn" onClick={handle} aria-label={inPlan ? "Remove from plan" : "Add to plan"}>
            {inPlan ? "Remove" : "Add to Plan"}
          </button>
          <button className="btn secondary" aria-label="View details">Details</button>
        </div>
      </div>
    </article>
  );
};
