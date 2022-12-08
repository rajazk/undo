import { useEffect, useState } from "react";
import moment from "moment";
import {
  CarbonRegistryWrapperStyle,
  SearchInputStyle,
  TableWrapperStyle,
} from "./TableStyle";
import { CarbonRegistryResponse } from "types/products";

interface Props {
  carbonProducts: CarbonRegistryResponse[];
}

const CustomTable = ({ carbonProducts }: Props) => {
  const [search, setSearch] = useState("");
  const [productsData, setProductsData] = useState<
    CarbonRegistryResponse[] | []
  >([]);

  const searchHandler = (event: any) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };

  useEffect(() => {
    if (carbonProducts.length) {
      const filteredData = carbonProducts.filter((data) => {
        if (search == null) return data;
        else if (
          data.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
          data.orderedBy.toLowerCase().includes(search.toLowerCase()) ||
          data.projectCountry.toLowerCase().includes(search.toLowerCase())
        ) {
          return data;
        }
      });
      setProductsData(filteredData);
    }
  }, [carbonProducts, search]);

  return (
    <CarbonRegistryWrapperStyle>
      <h3>Carbon Registry</h3>
      <SearchInputStyle>
        <input
          type="text"
          onChange={(e) => searchHandler(e)}
          placeholder="Search"
        />
      </SearchInputStyle>
      <TableWrapperStyle>
        <table className="table  table-striped">
          <thead>
            <tr>
              <th scope="col">Order Number</th>
              <th scope="col">Order By</th>
              <th scope="col">Nationality</th>
              <th scope="col">Purchase Date</th>
              <th scope="col">Methodology</th>
              <th scope="col">Net Tonnes Removed</th>
              <th scope="col">Total Tonnes Sequestered</th>
              <th scope="col">Sequestration Year</th>
            </tr>
          </thead>
          <tbody>
            {productsData.length > 0 &&
              productsData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.orderNumber}</td>
                    <td>{data.orderedBy}</td>
                    <td>{data.projectCountry}</td>
                    <td>{moment(data.purchaseDate).format("L")}</td>
                    <td>{data.carbonData.methodology}</td>
                    <td>{data.carbonData.netTonnesRemoved}</td>
                    <td>{data.carbonData.totalTonnesSequestered}</td>
                    <td>
                      {moment(data.carbonData.sequestrationYear).format("YYYY")}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {!productsData.length && (
          <p className="empty-data">No Record Found...</p>
        )}
      </TableWrapperStyle>
    </CarbonRegistryWrapperStyle>
  );
};

export default CustomTable;
