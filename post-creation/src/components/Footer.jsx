import { ChevronLeft, ChevronRight } from 'lucide-react';

const Footer = ({ page, setPage, total }) => {
  const limit = 10;
  const totalPages = Math.ceil(total / limit);

  const startPage = Math.max(1, page - 1);
  const endPage = Math.min(totalPages, page + 1);

  const arrayNum = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  return (
    <footer className="bg-white border-t border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span>Showing </span>
            <span className="font-medium text-gray-900">
              {startItem}-{endItem}
            </span>
            <span> of </span>
            <span className="font-medium text-gray-900">{total}</span> posts
          </div>

          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              disabled={page === 1}
              onClick={() => setPage((prev) => (prev === 1 ? prev : prev - 1))}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-1">
              {arrayNum.map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`w-10 h-10 text-sm font-medium rounded-lg ${
                    page === pageNumber
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>

            <button
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
              disabled={page === totalPages}
              onClick={() =>
                setPage((prev) => (prev === totalPages ? prev : prev + 1))
              }
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
