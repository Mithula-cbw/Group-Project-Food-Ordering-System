import React, { PureComponent, useContext, useEffect } from "react";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Box from "../Dashboard/components/Box";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagHandleSharp } from "react-icons/io5";
import { GiStarsStack } from "react-icons/gi";
import { Button, Menu, MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FaPencil } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";

import { Mycontext } from "../../App";
import { Link } from "react-router-dom";
import axios from "axios";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-toastify/dist/ReactToastify.css";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export const chartData = [
  ["Category", "Amount"],
  ["2021", 4000],
  ["2022", 2000],
  ["2023", 2500],
  ["2024", 2500],
];

export const chartOptions = {
  title: "Anual sale",
  pieHole: 0.5, // Donut style
  is3D: false,
  colors: ["#ff6b6b", "#f8c372", "#4ecdc4", "#1feec9"],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "#fff",
      fontSize: 14,
    },
  },
  pieSliceTextStyle: {
    color: "#fff",
  },
  backgroundColor: "transparent",
  animation: {
    startup: true,
    easing: "inAndOut",
    duration: 1000, // Duration of animation in milliseconds
  },
  tooltip: {
    textStyle: {
      color: "#000",
      fontSize: 14,
    },
    showColorCode: true,
  },
  chartArea: { width: "90%", height: "80%" },
};
const itemsPerPage = 5; // Number of items per page
const ProductList = () => {
  const [showBy, setshowBy] = React.useState("");
  const [catBy, setCatBy] = React.useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  const context = useContext(Mycontext);
  useEffect(() => {
    context.setisHideSidebarAndHeader(false);
    window.scrollTo(0, 0);
  }, []);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const data = [
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    {
      uid: "001",
      product: "Margherita Pizza...",
      category: "Pizza",
      type: "Vegetarian",
      price: "$12.99",
      stock: 20,
      rating: "4.5(16)",
      order: 50,
      sales: "$49.50",
      imgSrc:
        "https://adminsc.pizzahut.lk//images/mainmenu/52b93289-98a9-4296-87a4-0a0e0acda8c6.jpg",
    },
    // Add more products here
  ];
  const filteredData = data.filter((item) => {
    let isValid = true;

    // Filter by 'showBy' value
    if (showBy && item.someProperty !== showBy) {
      isValid = false;
    }

    // Filter by 'catBy' value
    if (catBy && item.category !== catBy) {
      isValid = false;
    }

    return isValid;
  });

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="right-content ">
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-4">
          <Box
            color={["#1da256", "#48d483"]}
            icon={<FaUserCircle />}
            grow={true}
          />
        </div>
        <div className="col-md-4">
          <Box color={["#c012e2", "#eb64fe"]} icon={<FaCartShopping />} />
        </div>
        <div className="col-md-4">
          {" "}
          <Box color={["#2c78e5", "#60aff5"]} icon={<IoBagHandleSharp />} />
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>

          {/* //there is an issue */}
          <div className="row cardFilters mt-3">
            <div className="col-md-3 ">
              <h4 style={{ fontSize: "17px" }}>SHOW BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-3 ">
              <h4 style={{ fontSize: "17px" }}>CATEGORY BY</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={catBy}
                  onChange={(e) => setCatBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered align-items-center v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th style={{ width: "300px" }}>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>TYPE</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item) => (
                  <tr key={item.uid}>
                    <td>{item.uid}</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img src={item.imgSrc} alt="" className="w-100" />
                          </div>
                        </div>
                        <div className="info pl-0">
                          <h6>{item.product}</h6>
                          <p>Product description here.</p>
                        </div>
                      </div>
                    </td>
                    <td>{item.category}</td>
                    <td>{item.type}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.rating}</td>
                    <td>{item.order}</td>
                    <td>{item.sales}</td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button color="secondary">
                          <FaPencil />
                        </Button>
                        <Link to="/product/details">
                          <Button color="success">
                            <FaEye />
                          </Button>
                        </Link>
                        <Button color="error">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex tableFooter">
              <Pagination
                count={Math.ceil(data.length / itemsPerPage)}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
                className="pagination"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
