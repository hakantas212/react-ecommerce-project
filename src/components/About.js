import React from "react";
import aboutus from "../../src/aboutus.jpg";
import workshop from "../../src/workshop.jpg";

export default function About() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h1>ABOUT US</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-10 max-auto col-md-6 my-3 ">
            <img src={workshop} alt="about" className="img-fluid"></img>
          </div>
          <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
            <h2>Our Story </h2>
            <p className="text-muted lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
              sem ante, tempor placerat velit efficitur eget. Suspendisse
              tincidunt blandit urna scelerisque consectetur. Aenean luctus mi
              in rutrum commodo. Nulla mollis viverra porta. Vivamus in mollis
              nulla. Maecenas et orci interdum, sollicitudin felis ac, dictum
              arcu. Aenean sit amet nibh ac est ornare imperdiet in et dui.
              Nullam interdum, quam ut laoreet malesuada, dui mauris sodales
              ligula, eu viverra elit ligula a sem. Sed bibendum elit sit amet
              urna posuere, ut tempor ipsum rutrum. Praesent porttitor ante
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-10 max-auto col-md-6 my-3 text-capitalize">
            <h2>Our Values </h2>
            <p className="text-muted lead">
              Pellentesque ullamcorper ultrices sem eleifend mollis. Morbi
              viverra lectus egestas, malesuada erat eu, accumsan dolor. Sed sed
              orci sit amet mauris venenatis bibendum. Nam consequat tristique
              sodales. Vestibulum sed nulla velit. Sed maximus justo non justo
              commodo elementum. Maecenas ac nibh in nisl interdum auctor.
              Aenean at placerat enim. Cras eu odio sit amet magna congue
              fermentum cursus et mauris. Proin eget velit volutpat tortor
              fringilla faucibus rutrum ac ligula. Morbi ullamcorper rutrum
              commodo. Nulla sit amet feugiat ligula, at lobortis leo. Praesent
              eget accumsan nisi.
            </p>
          </div>
          <div className="col-10 max-auto col-md-6 my-3 ">
            <img src={aboutus} alt="about" className="img-fluid"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
