import styled from "styled-components/macro";
import bgImage from "assets/images/bg.jpg";

export const BgImageStyle = styled.div`
  background-image: url(${bgImage});
  width: 100%;
  height: 300px;
  background-size: cover;
`;

export const ProductListWrapperStyle = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const ProductListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;
