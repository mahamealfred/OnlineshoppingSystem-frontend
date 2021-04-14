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
import { deleteProductAction } from '../../redux/actions/deleteProductAction';

const ProductListResult = ({ ...rest }) => {
  const productsState = useSelector((state) => state.products);
  const deleteProductState = useSelector((state) => state.deleteProductState);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    if (!productsState.loading) {
      if (productsState.products) {
        setProducts(productsState.products);
      }
    }
  }, [productsState.products]);

  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
const [productName, setproductName]= useState('');
const [productId, setproductId]= useState(0);
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleDelete = async () =>{
    await dispatch(deleteProductAction(productId))
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
          Are you sure you want to delete the product below "{productName}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            {deleteProductState? "Loading..." : "Delete"}
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
                <TableCell>Category Id</TableCell>
                <TableCell>price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Create Date</TableCell>
                <TableCell>Update Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.slice(0, limit).map((product) => (
                <TableRow
                  hover
                  key={product.id}
                  selected={selectedProductIds.indexOf(product.id) !== -1}
                >
                  <TableCell>{product.id}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {product.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {product.productId}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {product.price}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {product.quantity}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Typography color="textPrimary" variant="body1">
                        {product.description}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {moment(product.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>
                    {moment(product.updatedAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell color="textPrimary" variant="body1">
                  <IconButton aria-label="update">
                      <BorderColorIcon />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary" onClick={()=> {
                        setproductId(product.id)
                        setproductName(product.name)
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
        count={products.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ProductListResult.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductListResult;
