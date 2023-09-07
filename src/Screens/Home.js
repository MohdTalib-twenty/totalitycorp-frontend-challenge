import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Products  from "../Data/Product";
import categoryData from "../Data/Category";
import Left from "./Left";
export default function Home() {

  const [FilterProducts, setFilterProducts] = useState([]);
 
  const [filterRating, setFilterRating] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterPrice, setFilterPrice] = useState("all");
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
   
    if (
      filterCategory !== "all" ||
      filterPrice !== "all" ||
      filterRating !== "all" 
    ) {
      setFilter(true);
      var tempProducts = Products;
      if (filterCategory != "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === filterCategory
        );
      }
      
      if (filterRating != "all") {
        tempProducts = tempProducts.filter(
          (product) => (product.rating === Number(filterRating))
        );
      }
  
    
      if (filterPrice != "all") {
        if(filterPrice != "Above400"){
          tempProducts = tempProducts.filter(
            (product) => (product.newPrice <= Number(filterPrice))
          );
        }else{
          tempProducts = tempProducts.filter(
            (product) => (product.newPrice > Number(filterPrice))
          );
        }
      }
      setFilterProducts(tempProducts);
    }else{
      setFilter(false)
    }
  };

  
  useEffect(() => {
    // fetchProduct();
    // fetchCategory();

    //eslint-next-line-disabled
  }, []);
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner">
          <div
            class="carousel-caption d-none d-md-block"
            style={{ }}
          >
           
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "500px", }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1507351/pexels-photo-1507351.jpeg?auto=compress&cs=tinysrgb&w=1600"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "500px", }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/2961991/pexels-photo-2961991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "500px", }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container-md  mt-3">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-3 col-xl-3">
            <div className="container-fluid">
              <div className="row">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3 className="mx-2 fw-bold fs-5 text-success">
                      Filter by Category
                    </h3>
                  </div>
                  <div className="card-body mx-1">
                    <select
                      className="py-2 px-2 fs-5"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                    >
                      <option value=""> Select Category</option>
                      <option value="all">All</option>
                      <option value="sandals">sandals</option>
                      <option value="heels">heels</option>
                      <option value="sneakers">sneakers</option>
                      <option value="flats">flats</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3 className="mx-2 fw-bold fs-5 text-success">
                      Filter by Price
                    </h3>
                  </div>
                  <div className="card-body mx-1">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="200"
                        onClick={(e) => setFilterPrice(e.target.value)}
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        0-200
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="400"
                        onClick={(e) => setFilterPrice(e.target.value)}
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        0-400
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Above400"
                        onClick={(e) => setFilterPrice(e.target.value)}
                        id="flexCheckChecked"
                      />
                      <label class="form-check-label" for="flexCheckChecked">
                        Above 400
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card mt-3 mb-3" style={{ maxWidth: "300px" }}>
                  <div className="card-title mt-2 mb-1 mx-1">
                    <h3 className="mx-2 fw-bold fs-5 text-success">
                      Filter by Rating
                    </h3>
                  </div>
                  <div className="card-body mx-1">
                    <select
                      className="py-2 px-2 fs-5"
                      value={filterRating}
                      onChange={(e) => setFilterRating(e.target.value)}
                    >
                      <option value="">Choose Rating</option>
                      <option value="all">All</option>
                      <option value="1">1-Star</option>
                      <option value="2">2-Star</option>
                      <option value="3">3-Star</option>
                      <option value="4">4-Star</option>
                      <option value="5">5-Star</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row ">
                <button
                  className="btn btn-success text-white mt-4"
                  style={{ maxWidth: "300px" }}
                  onClick={handleFilter}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className=" col-md-12 col-sm-12 col-lg-9 col-xl-9 ">
            {!filter ? (
              categoryData.map((c) => {
                return (
                  <>
                    <div className="row mx-3">
                      <h3 className="text-center mt-3 fw-bold">
                        {c.category}
                      </h3>
                      {Products.filter(
                        (product) =>
                          product.category == c.category 
                          
                      ).map((data) => {
                        return (
                          <>
                            <div className="col-md-6 col-lg-6 col-xl-4 col-sm-12 my-3 ">
                              <Card cardDetails={data} />
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })
            ) : (
              <>
                <div className="row mx-3">
                  <h3 className="text-center mt-3 fw-bold">{filterCategory}</h3>
                  {FilterProducts.length > 0 ? (FilterProducts.map((data) => {
                    return (
                      <>
                        <div className="col-md-4  my-3">
                          <Card cardDetails={data} />
                        </div>
                      </>
                    );
                  })):(<><h3 className="text-center text-success fw-bold mt-5">No Product Found</h3></>)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
