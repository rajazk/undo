import { Fragment, useState, useEffect } from "react";
import { CarbonRegistryResponse } from "types/products";
import axios from "axios";
import Header from "components/header/Header";
import ProductCard from "components/productCard/ProductCard";
import CustomTable from "components/customTable/CustomTable";
// Styles
import {
  BgImageStyle,
  ProductListWrapperStyle,
  ProductListStyle,
} from "./HomeStyles";
import { SpinnerStyle } from "components/spinner/SpinnerStyles";

const Home = () => {
  const [products, setProducts] = useState<CarbonRegistryResponse[] | []>([]);

  useEffect(() => {
    axios
      .get(
        "https://apim-undo-newton-dev-uks-001.azure-api.net/newton/registry/orders",
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "2e4faa2a9a0b4a9a80bb42c384f2d216",
          },
        }
      )
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <BgImageStyle />
      {!products.length ? (
        <SpinnerStyle />
      ) : (
        <ProductListWrapperStyle>
          <div>
            <ProductListStyle>
              {products.map(
                (product: CarbonRegistryResponse, index: number) => (
                  <ProductCard key={index} product={product} />
                )
              )}
            </ProductListStyle>
          </div>
        </ProductListWrapperStyle>
      )}
      <CustomTable carbonProducts={products}/>
    </Fragment>
  );
};

export default Home;
