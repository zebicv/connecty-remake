function SearchPost({ onChange, searchQuery }) {
  return (
    <div className="flex grow justify-center">
      <form>
        <input
          placeholder="Search post #"
          className="w-52 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-sm placeholder:text-slate-400 focus:w-56 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-80 sm:focus:w-96"
          onChange={(e) => onChange(e.target.value)}
          value={searchQuery}
        />
      </form>
    </div>
  );
}

export default SearchPost;
