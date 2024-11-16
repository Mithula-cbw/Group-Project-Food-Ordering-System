import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { FaPencil } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import { Mycontext } from "../../App";
import { Link } from "react-router-dom";
import { deleteData, editData, fetchDataFromApi } from "../../utils/Api";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/system";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from "@mui/material/CircularProgress";

// Styled Components
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "15px",
    background: "linear-gradient(to bottom right, #f7f9fc, #e0e6ed)",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    animation: "fadeIn 0.3s ease-in-out",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  },
  "& .MuiBackdrop-root": {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity of the backdrop
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.5rem",
  color: "#3f51b5",
  borderBottom: "1px solid #d1d9e6",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    borderRadius: "10px",
    backgroundColor: "#ffffff",
  },
  "& .MuiInputLabel-root": {
    color: "#707070",
  },
}));

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: "center",
  paddingBottom: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  padding: "10px 20px",
  borderRadius: "20px",
  backgroundColor: "#3279a8", // Normal background color
  color: "#000", // Text color in normal state
  transition: "transform 0.2s ease-in-out, background-color 0.2s ease-in-out", // Smooth transition for background color change
  "&:hover": {
    transform: "scale(1.1)",
    backgroundColor: "#3279a8", // Hover background color
  },
  "&:active": {
    backgroundColor: "#3279a8", // Active background color (when clicked)
  },
}));

const itemsPerPage = 5;

const CategoryList = () => {
  const [catData, setCatData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    images: "",
    color: "",
  });
  const [editId, setEditId] = useState(null);

  const context = useContext(Mycontext);

  useEffect(() => {
    context.setisHideSidebarAndHeader(false);
    window.scrollTo(0, 0);

    // Fetch categories from API
    fetchDataFromApi("/api/category").then((res) => {
      if (res) {
        setCatData(res); // Assuming `res` is the array of categories
      }
    });
  }, [context]);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editCat = (id) => {
    setFormFields({
      name: "",
      images: "",
      color: "",
    });
    setOpen(true);
    setEditId(id);
    fetchDataFromApi(`/api/category/${id}`).then((res) => {
      if (res) {
        setFormFields({
          name: res.name,
          images: res.images,
          color: res.color,
        });
      }
    });
  };

  const catEdit = (e) => {
    e.preventDefault();
    // Check if images is an array or string, handle accordingly
    setIsLoading(true);
    const imagesToUpdate = Array.isArray(formFields.images)
      ? formFields.images
      : [formFields.images];

    const updatedCategory = {
      ...formFields,
      images: imagesToUpdate,
    };

    editData(`/api/category/${editId}`, updatedCategory)
      .then(() => {
        fetchDataFromApi("/api/category").then((res) => {
          if (res) {
            setCatData(res);
          }
          setOpen(false);
          setIsLoading(false);
          toast.success("Category updated successfully!"); // Success message
        });
      })
      .catch(() => {
        toast.error("Failed to update the category."); // Error message
      });
  };

  const inputChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addimgurl = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      images: e.target.value, // Directly set the image URL as a string
    }));
  };

  const paginatedData = catData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const deleteCat = (id) => {
    deleteData(`/api/category/${id}`)
      .then((res) => {
        fetchDataFromApi("/api/category").then((res) => {
          if (res) {
            setCatData(res);
            toast.success("Category Deleted successfully!");
          }
          setOpen(false);
        });
      })
      .catch(() => {
        toast.error("Failed to update the category."); // Error message
      });
  };
  return (
    <div className="right-content">
      <ToastContainer position="bottom-right" /> {/* Toast container */}
      <div className="row dashboardBoxWrapperRow">
        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Categories</h3>
          <div className="table-responsive mt-3">
            <table className="table table-bordered align-items-center v-align">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>CATEGORY</th>
                  <th>IMAGE</th>
                  <th>COLOR</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((item, index) => (
                  <tr key={item._id}>
                    <td>#00{index + 1}</td>
                    <td>
                      <div className="d-flex align-items-center productBox">
                        <div className="imgWrapper">
                          <div className="img">
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="info pl-0">
                          <h6>{item.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        style={{ height: "60px", width: "60px" }}
                      />
                    </td>
                    <td style={{ backgroundColor: item.color }}>
                      {item.color}
                    </td>
                    <td>
                      <div className="actions d-flex align-items-center">
                        <Button
                          color="secondary"
                          onClick={() => editCat(item._id)}
                        >
                          <FaPencil />
                        </Button>
                        <Link to={`/category/details/${item._id}`}>
                          <Button color="success">
                            <FaEye />
                          </Button>
                        </Link>
                        <Button
                          color="error"
                          onClick={() => deleteCat(item._id)}
                        >
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
                count={Math.ceil(catData.length / itemsPerPage)}
                page={currentPage}
                onChange={handleChangePage}
                color="primary"
                className="pagination"
              />
            </div>
          </div>
        </div>
      </div>
      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogTitle>Edit Category</StyledDialogTitle>
        <form onSubmit={catEdit}>
          <DialogContent>
            <StyledTextField
              autoFocus
              required
              margin="dense"
              id="category"
              name="name"
              label="Category Name"
              type="text"
              fullWidth
              value={formFields.name}
              onChange={inputChange}
            />
            <StyledTextField
              required
              margin="dense"
              id="images"
              name="images"
              label="Image URL"
              type="text"
              fullWidth
              value={formFields.images}
              onChange={addimgurl}
            />
            <StyledTextField
              required
              margin="dense"
              id="color"
              name="color"
              label="Color"
              type="text"
              fullWidth
              value={formFields.color}
              onChange={inputChange}
            />
          </DialogContent>
          <StyledDialogActions>
            <StyledButton onClick={handleClose} color="secondary">
              Cancel
            </StyledButton>
            <StyledButton type="submit" color="primary" disabled={isLoading}>
              {isLoading ? (
                <CircularProgress size={24} color="#ffffff" />
              ) : (
                "Save"
              )}
            </StyledButton>
          </StyledDialogActions>
        </form>
      </StyledDialog>
    </div>
  );
};

export default CategoryList;
