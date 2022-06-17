const SearchIcon = () => (
  <svg
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.269 8.306C14.269 12.1212 11.1854 15.2116 7.38451 15.2116C3.58364 15.2116 0.5 12.1212 0.5 8.306C0.5 4.49079 3.58364 1.40039 7.38451 1.40039C11.1854 1.40039 14.269 4.49079 14.269 8.306Z"
      stroke="#262626"
    />
    <path
      d="M12.9219 12.9346L17.9987 17.1002"
      stroke="#262626"
      strokeLinecap="round"
    />
  </svg>
);

const Search = () => {
  return (
    <div className="mt-3 relative rounded-xl  border border-gray-8 mb-3">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className="text-gray-500 sm:text-sm">
          <SearchIcon />
        </span>
      </div>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full pl-9 py-2 bg-gray-8  border border-gray-8 rounded-xl"
        placeholder="Search assets"
      />
    </div>
  );
};
export default Search;
