import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const ViewProducts = () => {
  const [data, setData] = useState([]);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Products")) || []);
  }, []);

  const handleDelete = (id) => {
    setOpen2(true);
    setDeleteItem(id);
  };

  const confirmDelete = () => {
    const updatedData = data.filter(item => item.u_id !== deleteItem);
    localStorage.setItem("Products", JSON.stringify(updatedData));
    setData(updatedData);
    setOpen2(false);
  };

  const handleUpdate = (id) => {
    const selectedProduct = data.find(item => item.u_id === id);
    setUpdatedProduct(selectedProduct);
    setOpen3(true);
    setSelectedUser(id);
  };

  const confirmUpdate = () => {
    const updatedData = data.map(item => {
      if (item.u_id === selectedUser) {
        return {
          ...item,
          ...updatedProduct,
        };
      }
      return item;
    });

    localStorage.setItem("Products", JSON.stringify(updatedData));
    setData(updatedData);
    setOpen3(false);
    setUpdatedProduct({});
  };

  const handleClose = () => {
    setOpen2(false);
    setOpen3(false);
    setUpdatedProduct({});
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Slno</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Product Name</StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Category</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img src={row.img} alt="Product" style={{ width: '100px', height: 'auto' }} />
                </StyledTableCell>
                <StyledTableCell align="right">{row.pname}</StyledTableCell>
                <StyledTableCell align="right">{row.descp}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">{row.category}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant='outlined' color="primary" onClick={() => handleUpdate(row.u_id)}>
                    <EditIcon />
                  </Button>
                  <Button variant='outlined' color="error" onClick={() => handleDelete(row.u_id)}>
                    <DeleteIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={open2} onClose={handleClose}>
        <DialogTitle style={{ background: 'pink', marginBottom: '30px' }}>Delete Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this item?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Update Dialog */}
      <Dialog open={open3} onClose={handleClose}>
        <DialogTitle style={{ background: 'pink', marginBottom: '30px' }}>Update Product</DialogTitle>
        <DialogContent>
          <TextField label="Image" fullWidth value={updatedProduct.img || ''} onChange={(e) => setUpdatedProduct({ ...updatedProduct, img: e.target.value })} style={{ marginBottom: '30px' }} />
          <TextField label="Product Name" fullWidth value={updatedProduct.pname || ''} onChange={(e) => setUpdatedProduct({ ...updatedProduct, pname: e.target.value })} style={{ marginBottom: '30px' }} />
          <TextField label="Description" fullWidth value={updatedProduct.descp || ''} onChange={(e) => setUpdatedProduct({ ...updatedProduct, descp: e.target.value })} style={{ marginBottom: '30px' }} />
          <TextField label="Price" fullWidth value={updatedProduct.price || ''} onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })} style={{ marginBottom: '30px' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ViewProducts;
