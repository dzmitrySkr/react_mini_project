import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLimit, setPage } from "../store/ProductSlicer";
import { useGetProductsQuery } from "../store/DummyApi";

export const usePagination = () => {
    const dispatch = useDispatch();

    const { search, limit, page } = useSelector((store) => store.productsUi);
    const [pageInput, setPageInput] = useState(page);
    const { data, isLoading } = useGetProductsQuery({limit, search, page,});

    const totalPages = Math.max(
        1,
        Math.ceil((data?.total || 0) / limit)
    );

    useEffect(() => {
        setPageInput(page);
    }, [page]);

    const changePage = (value) => {
        let pageNumber = Number(value);

        if (!pageNumber || pageNumber < 1) pageNumber = 1;
        if (pageNumber > totalPages) pageNumber = totalPages;

        dispatch(setPage(pageNumber));
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