import React from "react";
import Search from "./Search";
import img1 from "../img/pic1.jpg";
import img2 from "../img/pic2.jpg";
import img3 from "../img/pic3.jpg";

export default function HomePage() {
  return (
    <>
      <br />
      <br />
      <div
        id="carouselExampleIndicators"
        class="carousel slide container"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={img1}
              class="d-block w-100"
              height="450"
              alt="cricket logo"
            />
          </div>
          <div class="carousel-item">
            <img
              src={img2}
              class="d-block w-100"
              height="450"
              alt="cricket logo"
            />
          </div>
          <div class="carousel-item">
            <img src={img3} class="d-block w-100" height="450" alt="cricket" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        {/* <Search searchdata = {searchdata} setsearchdata = {setsearchdata}/> */}
      </div>
    </>
  );
}
