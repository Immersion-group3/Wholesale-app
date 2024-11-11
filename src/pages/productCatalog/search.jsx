const [filteredAds, setFilteredAds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = async (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filter = JSON.stringify({
      title: { "$regex": query, "$options": "i" }
    });
    const response = await apiSearch(filter);
    setAds(response.data);
  };




  <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearch} name="search" id="" className="h-12 w-6/12 rounded-md border border-black p-2" />
      <button type="submit" className="border border-white text-white py-3 px-9 rounded-lg hover:bg-slate-500">Search</button>