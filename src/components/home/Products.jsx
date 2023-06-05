//! Burada sadece fullfilled işlemi değil pending ve rejected olayları olduğu için mutlaka loading olayını mutlaka yapmalıyım.

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getProducts } from "../../redux/ProductSlice";
import Loading from "../Loading";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";

const Products = ({ category,sortProcess}) => {
  //! burada dispatch ile verileri alıp UseEffect ile güncellenip çağırdıktan sonra useSelector ile gösterecem.

  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products); //! products, productsStatus ProductSlice içinden  state.products ise store dan geliyor.

  /* console.log(products, productsStatus); */

  useEffect(() => {
    if (category) {
      dispatch(getCategory(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch,category]);

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6; //! sayfamda kaç tane gözüksün istiyorum
  const endOffset = itemOffset + itemsPerPage;
  /* console.log(`Loading items from ${itemOffset} to ${endOffset}`); */
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  
  console.log(sortProcess);

  return (
    <div>
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap">
            {currentItems?.sort((a,b) => sortProcess === "inc" ? b.price-a.price  : sortProcess === "dec" ? a.price-b.price  : null)?.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          </div>

          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
