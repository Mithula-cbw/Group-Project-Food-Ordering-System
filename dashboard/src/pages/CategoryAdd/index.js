import React, { useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { FaCloudArrowUp } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postData } from "../../utils/Api";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom"; // useNavigate import

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

const ProductDetails = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
    color: "",
  });

  const navigate = useNavigate(); // useNavigate hook for navigation

  const inputChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addimgurl = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      images: [e.target.value], // Directly set the images array
    }));
  };

  const addCategory = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true when the request starts
    try {
      const res = await postData("/api/category/create", formFields);
      console.log("API Response:", res);
      if (res?.success) {
        toast.success("Category added successfully!");
        navigate("/category/list"); // Navigate to category list after success
      } else {
        toast.error("Failed to add category. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error while adding category:", error);
    } finally {
      setIsLoading(false); // Set isLoading to false when the request finishes
    }
  };

  const [isLoading, setIsLoading] = useState(false); // Loading state for the button

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="right-contentt w-100">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          className="cardd shadow border-0 w-100"
        >
          <h5 className="m-3 p-2">Add a Category</h5>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              component="a"
              href="/"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb label="Category" component="a" href="/category" />
            <StyledBreadcrumb label="Add a Category" />
          </Breadcrumbs>
        </Box>

        <form className="form mt-4 formform" onSubmit={addCategory}>
          <div className="row ml-3">
            <div className="col-md-12 ml-3">
              <div className="card p-4 mt-0">
                <h5 className="mb-4">Basic Information</h5>

                <div className="form-group">
                  <h6>Category Name</h6>
                  <input
                    type="text"
                    name="name"
                    onChange={inputChange}
                    placeholder="Enter category name"
                    required
                  />
                </div>
                <div className="form-group">
                  <h6>Image URL</h6>
                  <input
                    type="text"
                    name="images"
                    onChange={addimgurl}
                    placeholder="Enter category image URL"
                  />
                </div>
                <div className="form-group">
                  <h6>Color</h6>
                  <input
                    type="text"
                    name="color"
                    onChange={inputChange}
                    placeholder="Enter category color"
                  />
                </div>

                <Button type="submit" className="btn-blue btn-lg btn-big">
                  <FaCloudArrowUp /> &nbsp;{" "}
                  {isLoading ? (
                    <CircularProgress size={24} color="#ffffff" />
                  ) : (
                    "Publish Category"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductDetails;
