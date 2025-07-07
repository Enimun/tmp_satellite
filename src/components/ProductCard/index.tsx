import React, {FC, memo} from "react";
import styled from "styled-components";
import {ProductCardProps} from "./types";

const ProductCard: FC<ProductCardProps> = memo((props) => {
  const { title, origin, price, currency, imageUrl } = props;
  
  const locale = currency === "RUB" ? "ru-RU" : "en-US";
  
  const priceFormatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price / 100);
  
  return (
    <ProductCardWrapper>
      <ImageWrapper src={imageUrl} alt={title} />
      <DetailsWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <CommonTextWrapper>Страна: {origin}</CommonTextWrapper>
        <CommonTextWrapper>{priceFormatted}</CommonTextWrapper>
      </DetailsWrapper>
    </ProductCardWrapper>
  );
});

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  max-width: 600px;
  margin: 16px auto;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.img`
  width: 200px;
  height: auto;
  object-fit: cover;
  
  @media (max-width: 500px) {
    width: 100%;
    height: auto;
  }
`;

const DetailsWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 500px) {
    width: 100%;
    align-items: center;
    text-align: center;
    padding: 12px;
  }
`;

const TitleWrapper = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 8px 0;
`;

const CommonTextWrapper = styled.p`
  margin: 4px 0;
  font-size: 1rem;
  color: #555;
`;

export default ProductCard;
