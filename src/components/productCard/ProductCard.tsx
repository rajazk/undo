import {
  ProductStyle,
  ProductBodyStyle,
  ButtonWrapperStyle,
} from "./ProductCardStyles";
//Types
import { CarbonRegistryResponse } from "../../types/products";
import productImg from "assets/images/productImg.jpg";
import moment from "moment";

interface Props {
  product: CarbonRegistryResponse;
}

function ProductCard({ product }: Props) {
  return (
    <ProductStyle>
      <div className="productImage">
        <img src={productImg} alt="" />
      </div>
      <ProductBodyStyle>
        <div className="title">
          <h5>Order Details</h5>
        </div>
        <div className="title">
          <p>Order By:</p>
          <p>{product.orderedBy}</p>
        </div>
        <div className="title">
          <p>Order Number</p>
          <p>{product.orderNumber}</p>
        </div>
        <div className="title">
          <p>Nationality: </p>
          <p>{product.saleCountry}</p>
        </div>
        <div className="title">
          <p>Project Country: </p>
          <p>{product.projectCountry}</p>
        </div>
        <div className="title">
          <p>Purchase Date: </p>
          <p>{moment(product.purchaseDate).format("L")}</p>
        </div>
        <div className="title">
          <h5>Carbon Data</h5>
        </div>
        <div className="title">
          <p>Methodology: </p>
          <p>{product.carbonData.methodology}</p>
        </div>
        <div className="title">
          <p>Net Tonnes Removed: </p>
          <p>{product.carbonData.netTonnesRemoved}</p>
        </div>
        <div className="title">
          <p>Total Tonnes Sequestered: </p>
          <p>{product.carbonData.totalTonnesSequestered}</p>
        </div>
        <div className="title">
          <p>Sequestration Year: </p>
          <p>{moment(product.carbonData.sequestrationYear).format("YYYY")}</p>
        </div>
        <ButtonWrapperStyle>
          <button>Quick View</button>
        </ButtonWrapperStyle>
      </ProductBodyStyle>
    </ProductStyle>
  );
}

export default ProductCard;
