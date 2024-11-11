

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Show all pages if there are 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show the first three pages
      pages.push(1, 2, 3);

      // Show ellipsis if currentPage is further than 4
      if (currentPage > 4) {
        pages.push('...');
      }

      // Show current page and its adjacent pages (if they are not within the first three or last three)
      if (currentPage > 3 && currentPage < totalPages - 2) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }

      // Show ellipsis if currentPage is before the last 3 pages
      if (currentPage < totalPages - 3) {
        pages.push('...');
      }

      // Always show the last three pages
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-2">
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && setCurrentPage(page)}
          className={`px-3 py-1 rounded-lg ${
            page === currentPage
              ? 'bg-green-100 text-green-700 font-bold'
              : 'bg-transparent text-gray-700'
          } ${page === '...' ? 'cursor-default' : 'hover:bg-gray-200'}`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
