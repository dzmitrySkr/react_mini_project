import {useGetProductsQuery} from "../../../../store/DymmyApi";
import {useDispatch, useSelector} from "react-redux";
import { setSearch } from "../../../../store/ProducSlicer";
import {ProductItem} from "./ProductItem";
import "./Products.css"
import Pagination from "./Pagination";


let Products = () => {

    const search = useSelector((store) => store.productsUi.search);
    const limit = useSelector((store) => store.productsUi.limit);
    const page = useSelector((store) => store.productsUi.page);
    const dispatch = useDispatch();
    let { data, isLoading } = useGetProductsQuery({ limit, search, page });

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
                    <div>Not found</div>
                )}
            </main>

        <Pagination/>

        </div>
    );
};

export default Products;