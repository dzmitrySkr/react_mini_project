import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLimit, setPage } from "../store/ProducSlicer";
import { useGetProductsQuery } from "../store/DymmyApi";

export const usePagination = () => {
    const dispatch = useDispatch();

    const search = useSelector((store) => store.productsUi.search);
    const limit = useSelector((store) => store.productsUi.limit);
    const page = useSelector((store) => store.productsUi.page);

    const [pageInput, setPageInput] = useState(page);

    const { data, isLoading } = useGetProductsQuery({
        limit,
        search,
        page,
    });

    const totalPages = Math.max(
        1,
        Math.ceil((data?.total || 0) / limit)
    );

    useEffect(() => {
        setPageInput(page);
    }, [page]);

    const applyPage = useCallback(
        (value) => {
            let pageNumber = Number(value);

            if (!pageNumber || pageNumber < 1) pageNumber = 1;
            if (pageNumber > totalPages) pageNumber = totalPages;

            dispatch(setPage(pageNumber));
        },
        [dispatch, totalPages]
    );

    const changePage = (newPage) => {
        applyPage(newPage);
    };

    const changeLimit = (newLimit) => {
        dispatch(setLimit(newLimit));
        dispatch(setPage(1));
    };

    return {
        page,
        limit,
        totalPages,
        pageInput,
        isLoading,

        setPageInput,
        changePage,
        changeLimit,
    };
};