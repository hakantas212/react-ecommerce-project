import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const { cartSubTotal, cartTax, cartTotal, removeAll } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger mb-3 px-5"
                type="button"
                onClick={() => removeAll()}
              >
                Remove All
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal:{cartSubTotal}</span>
            </h5>
            <h5>
              <span className="text-title">Tax:{cartTax}</span>
            </h5>
            <h5>
              <span className="text-title">Total:{cartTotal}</span>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
