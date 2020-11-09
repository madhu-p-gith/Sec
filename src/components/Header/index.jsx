import React from "react";

import { SITE_NAME } from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand" href="#">
        🛍️{SITE_NAME}
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Category
            </a>
          </li>
          <li classNameNameName="navbar-item">
            My Account{" "}
            <FontAwesomeIcon icon={{ prefix: "fa", iconName: "user-circle" }} />
          </li>
          <li classNameNameName="navbar-item">
            Cart{" "}
            <FontAwesomeIcon
              icon={{ prefix: "fa", iconName: "shopping-cart" }}
            />
          </li>
        </ul>
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();

            try {
              const query = e.target.query.value;

              console.log(" SearchBoxQuery =----> ", query);
            } catch (e) {
              console.log(" SearchBoxError =----> ", e.message);
            }
          }}
        >
          <input
            name="query"
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search product"
          />
          <button
            className="btn bg-success text-light btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
  return (
    <div classNameNameName="app-header sticky top">
      <div classNameNameName="logo-container">🛍️{SITE_NAME}</div>
      <nav classNameNameName="app-navigation">
        <ul classNameNameName="app-navbar">
          <li classNameNameName="navbar-item">Home</li>
          <li classNameNameName="navbar-item">Category</li>
          <li classNameNameName="navbar-item">Sale</li>
          <li classNameNameName="navbar-item search-box">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                try {
                  const query = e.target.query.value;

                  console.log("submit=====>", query);
                } catch (e) {
                  console.log("searchError======>", e.message);
                }
              }}
            >
              <input
                type="text"
                classNameNameName="search-field"
                placeholder="Search product"
              />
              <input
                type="submit"
                id="product-search"
                style={{ display: "none" }}
                placeholder="Search product"
              ></input>
              <label htmlFor="product-search">
                <FontAwesomeIcon
                  classNameNameName="search-icon"
                  icon={{ prefix: "fa", iconName: "search" }}
                />
              </label>
            </form>
          </li>
          <li classNameNameName="navbar-item">
            My Account{" "}
            <FontAwesomeIcon icon={{ prefix: "fa", iconName: "user-circle" }} />
          </li>
          <li classNameNameName="navbar-item">
            Cart{" "}
            <FontAwesomeIcon
              icon={{ prefix: "fa", iconName: "shopping-cart" }}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}
