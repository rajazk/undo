import styled from "styled-components/macro";

export const CarbonRegistryWrapperStyle = styled.div`
  background: #fff;
  border-radius: 24px;
  margin: 10px 15px 50px;
  width: 90%;
  margin: 0px auto 50px;
  padding-bottom: 50px;
  overflow: auto;

  h3 {
    font-size: 24px;
    padding: 20px;
    font-weight: 700;
    text-transform: capitalize;
  }
`;

export const SearchInputStyle = styled.div`
  width: 300px;
  margin-left: 20px;
  input {
    padding: 14px;
    border-radius: 7px;
    font-size: 18px;
    width: 100%;
  }
`;

export const TableWrapperStyle = styled.div`
  margin-top: 20px;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  th {
    text-align: left;
    padding: 8px 35px;
  }
  td {
    text-align: left;
    padding: 20px 35px 27px;
    color: #455759;
  }
  tr:nth-child(even) {
    background-color: #c5c5c5;
  }
  .empty-data {
    padding: 35px;
    color: #455759;
  }
`;
