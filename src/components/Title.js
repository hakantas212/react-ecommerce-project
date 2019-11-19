import React from "react";

function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title mt-5">
        <h1 className="text-capitalize">Products</h1>
      </div>
    </div>
  );
}

export default Title;
