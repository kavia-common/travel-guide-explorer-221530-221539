import React from "react";

/**
 * PUBLIC_INTERFACE
 * SearchBar
 * A controlled input that filters destinations by query.
 */
export const SearchBar: React.FC<{
  query: string;
  onChange: (q: string) => void;
  placeholder?: string;
}> = ({ query, onChange, placeholder }) => {
  return (
    <div className="searchbar" role="search">
      <span className="search-icon" aria-hidden="true">🔎</span>
      <input
        className="search-input"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Search destinations, countries, tags..."}
        aria-label="Search destinations"
      />
      {query ? (
        <button
          className="clear-icon"
          onClick={() => onChange("")}
          aria-label="Clear search"
          title="Clear"
        >
          ✕
        </button>
      ) : null}
    </div>
  );
};
