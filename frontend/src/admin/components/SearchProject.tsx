import { ChangeEvent } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  query: string;
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearchChange }) => {
  return (
    <div className="search-container">
      <FiSearch className="search-icon" />
      <input
        type="search"
        value={query}
        onChange={onSearchChange}
        className="search-bar"
        placeholder="Search Project..."
      />
    </div>
  );
};

export default SearchBar;
