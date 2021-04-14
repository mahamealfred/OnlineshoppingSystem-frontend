import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import Button from '@material-ui/core/Button';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import getInitials from "src/utils/getInitials";
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorIcon from '@material-ui/icons/BorderColor';
import IconButton from "@material-ui/core/IconButton";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteCategoriesAction } from '../../redux/actions/deleteCategoryAction';

const CustomerListResults = ({ ...rest }) => {
  const categoriesState = useSelector((state) => state.categories);
  const deleteCategoriesState = useSelector((state) => state.deleteCategories);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    if (!categoriesState.loading) {
      if (categoriesState.categories) {
        setCategories(categoriesState.categories);
      }
    }
  }, [categoriesState.categories]);

  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
const [categoryName, setcategoryName]= useState('');
const [categoryId, setcategoryId]= useState(0);
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleDelete = async () =>{
    await dispatch(deleteCategoriesAction(categoryId))
    setOpen(false);
    window.location.reload();
  }
  return (
    <Card {...rest}>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete the category below "{categoryName}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            {deleteCategoriesState.loading ? "Loading..." : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Create Date</TableCell>
                <TableCell>Update Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.slice(0, limit).map((category) => (
                <TableRow
                  hover
                  key={category.id}
                  selected={selectedCustomerIds.indexOf(category.id) !== -1}
                >
                  <TableCell>{category.id}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {category.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {moment(category.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>
                    {moment(category.updatedAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell color="textPrimary" variant="body1">
                  <IconButton aria-label="update">
                      <BorderColorIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary" onClick={()=> {
                        setcategoryId(category.id)
                        setcategoryName(category.name)
                        setOpen(true);
                    }}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={categories.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CustomerListResults;
