import FilterBarStyled from "./FilterBarStyled";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterBar = ({
  searchQuery,
  onSearchChange,
}: FilterBarProps): React.ReactElement => {
  return (
    <FilterBarStyled>
      <input
        className="search-bar-text"
        type="text"
        placeholder="Search podcasts"
        value={searchQuery}
        onChange={onSearchChange}
      />
    </FilterBarStyled>
  );
};

export default FilterBar;
