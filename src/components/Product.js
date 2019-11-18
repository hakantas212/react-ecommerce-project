import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    src={img}
                    alt="product image"
                    className="card-img-top"
                  ></img>
                </Link>
                <div className="black-overlay"> </div>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {" "}
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      ALREADY IN CART
                    </p>
                  ) : (
                    <p className="text-capitalize mb-0">ADD TO CART</p>
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">€</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border: none;
    margin: 0;
    transition: all 0.6 linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.6 linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.1);
      box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.3);
    }

    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 0.02rem;
  }

  .black-overlay:hover {
    opacity: 1;
  }
  .card-img-top {
    transition: all 0.4s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }

  .cart-btn {
    background: var(--lightBlue);
    color: var(--mainWhite);
    font-size: 1rem;
    border: none;
    position: absolute;
    left: 27%;
    bottom: 18px;
    -webkit-transform: translateY(500%);
    -moz-transform: translateY(500%);
    -ms-transform: translateY(500%);
    -o-transform: translateY(0%);
    transform: translateY(170%);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 0.3s linear;
  }

  .cart-btn:hover {
    background: var(--mainBlue);
    border: none;
  }
`;
