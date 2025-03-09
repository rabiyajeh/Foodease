import React from "react";

const SearchBar = () => {
  return (
    <div className="py-6 bg-gray-200 text-center">
      <input
        type="text"
        placeholder="Search for food..."
        className="px-4 py-2 w-2/3 md:w-1/3 rounded-md shadow-md outline-none"
      />
      <button className="ml-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Search</button>
    </div>
  );
};

export default SearchBar;
