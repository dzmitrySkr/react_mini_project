import {useGetProductsQuery} from "../../../../store/dymmyApi";
import {useDispatch, useSelector} from "react-redux";
import { setSearch, setLimit, setPage } from "../../../../store/ProducSlicer";
import {ProductItem} from "./ProductItem";
import "./Products.css"
import { useEffect, useState } from "react";


let Products = () => {
    const dispatch = useDispatch();
    const search = useSelector((store) => store.productsUi.search);
    const limit = useSelector((store) => store.productsUi.limit);
    const page = useSelector((store) => store.productsUi.page);

    const [pageInput, setPageInput] = useState(page);

    let { data, isLoading } = useGetProductsQuery({ limit, search, page });
    const totalPages = Math.ceil((data?.total || 0) / limit);

    const onPageInputKeyDown = (e) => {
        if (e.key !== "Enter") return;
        e.target.blur();
        let value = Number(pageInput);

        if (!value) return;
        if (value < 1) value = 1;
        if (value > totalPages) value = totalPages;

        dispatch(setPage(value));
    };

    const onBlur = () => {
        dispatch(setPage(Number(pageInput)));
    };

    useEffect(() => {
        setPageInput(page);
    }, [page]);

    const onPageInputChange = (e) => {
        setPageInput(e.target.value);
    };

    return (
        <div className="page_wrapper">

                <div className="products_header">Products list</div>

                <div className="search_header">
                    <input
                        value={search}
                        onChange={(e) => dispatch(setSearch(e.target.value))}
                        placeholder="Search"
                    />
                </div>
                <main className="content">
                {data?.products?.length ? (
                    <div className="table_wrapper">
                        <table className="products_table">
                            <thead>
                            <tr className={"white"}>
                                <th className="th_id">ID</th>
                                <th className="th_title">Название</th>
                                <th className="th_category">Категория</th>
                                <th className="th_price">Цена</th>
                                <th className="th_returnPolicy">Возврат</th>
                                <th className="th_warrantyInformation">Гарантия</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.products.map((item, ind) => (
                                <ProductItem key={item.id} item={item} ind={ind} />
                            ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div>Ничего не найдено</div>
                )}
            </main>

            <footer className="list_footer">
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
                    <div className="total_pages">Всего страниц: {totalPages}</div>
                </div>

                <div className="list_amount">
                    <label htmlFor="amount-select">Продуктов на странице:</label>
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
        </div>
    );
};

export default Products;