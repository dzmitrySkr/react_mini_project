import {setLimit, setPage} from "../../../../store/ProducSlicer";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useGetProductsQuery} from "../../../../store/DymmyApi";

let Pagination =()=> {
    const dispatch = useDispatch();
    const search = useSelector((store) => store.productsUi.search);
    const limit = useSelector((store) => store.productsUi.limit);
    const page = useSelector((store) => store.productsUi.page);
    const [pageInput, setPageInput] = useState(page);

    let { data, isLoading } = useGetProductsQuery({ limit, search, page });

    useEffect(() => {
        setPageInput(page);
    }, [page]);


    const totalPages = Math.ceil((data?.total || 0) / limit);

    const onPageInputChange = (e) => {
        setPageInput(e.target.value);
    };

    const onBlur = () => {
        dispatch(setPage(Number(pageInput)));
    };

    const onPageInputKeyDown = (e) => {
        if (e.key !== "Enter") return;
        e.target.blur();
        let value = Number(pageInput);

        if (!value) return;
        if (value < 1) value = 1;
        if (value > totalPages) value = totalPages;

        dispatch(setPage(value));
    };


    return <footer className="list_footer">
        <div className="list_pagination">
            <button
                className="left"
                disabled={page === 1}
                onClick={() => dispatch(setPage(page - 1))}
            >
                ←
            </button>
            <input
                type="number"
                className="current"
                value={pageInput}
                onChange={onPageInputChange}
                onKeyDown={onPageInputKeyDown}
                onBlur={onBlur}
            />
            <button
                className="right"
                disabled={page === totalPages}
                onClick={() => dispatch(setPage(page + 1))}
            >
                →
            </button>
            <div className="total_pages">Pages: {totalPages}</div>
        </div>

        <div className="list_amount">
            <label htmlFor="amount-select">Products on the page:</label>
            <select
                id="amount-select"
                value={limit}
                onChange={(e) => dispatch(setLimit(Number(e.target.value)))}
            >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
        </div>
    </footer>
}

export default Pagination;