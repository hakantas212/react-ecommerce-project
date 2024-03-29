import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import ImageGallery from "./ImageGallery";
import styled from "styled-components";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-3">
          <Wrapper className="container">
            <ImageGallery />

            <Title name="our" title="products"></Title>
            <div className="row" id="#products">
              <ProductConsumer>
                {ppp => {
                  return ppp.products.map(product => {
                    return (
                      <Product key={product.id} product={product}></Product>
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </Wrapper>
        </div>
        {/* <Product></Product> */}
      </React.Fragment>
    );
  }
}

const Wrapper = styled.section`
  section {
    height: 500px;
    width: 100%;
  }
`;
