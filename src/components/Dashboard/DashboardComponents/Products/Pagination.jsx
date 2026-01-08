import { usePagination } from "../../../../hooks/usePagination";

const Pagination = () => {
    const {
        page,
        limit,
        totalPages,
        pageInput,
        isLoading,
        setPageInput,
        changePage,
        changeLimit,
    } = usePagination();

    return (
        <footer className="list_footer">
            <div className="list_pagination">
                <button
                    className="left"
                    disabled={page === 1 || isLoading}
                    onClick={() => changePage(page - 1)}
                >
                    ←
                </button>

                <input
                    type="number"
                    className="current"
                    value={pageInput}
                    disabled={isLoading}
                    onChange={(e) => setPageInput(e.target.value)}
                    onBlur={() => changePage(pageInput)}
                    onKeyDown={(e) => e.key === "Enter" && e.target.blur()}
                />

                <button
                    className="right"
                    disabled={page === totalPages || isLoading}
                    onClick={() => changePage(page + 1)}
                >
                    →
                </button>

                <div className="total_pages">
                    Pages: {totalPages}
                </div>
            </div>

            <div className="list_amount">
                <label htmlFor="amount-select">
                    Products on the page:
                </label>

                <select
                    id="amount-select"
                    value={limit}
                    disabled={isLoading}
                    onChange={(e) =>
                        changeLimit(Number(e.target.value))
                    }
                >
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </div>
        </footer>
    );
};

export default Pagination;