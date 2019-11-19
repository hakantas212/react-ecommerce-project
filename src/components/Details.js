import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, info, price, title, inCart } = value.detail;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 max-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="detail"></img>
                </div>
                <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
                  <h3>Model: {title}</h3>
                  <h5>Company: {company}</h5>
                  <h4>
                    <span>{price}</span>€
                  </h4>
                  <p className="text-muted lead">{info}</p>
                  <Link to="/">
                    <ButtonContainer>Products</ButtonContainer>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add to cart"}
                    </ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
