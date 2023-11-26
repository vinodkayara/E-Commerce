// ImgMediaCard.jsx

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // backgroundColor:'white',
  color:'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ImgMediaCard = ({ product }) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(product, 90);
  return (
    <>
      <Card sx={{ maxWidth: 200,  maxHeight:600, backgroundColor: 'pink', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', margin: '10px' }}>
        <CardMedia
          component="img"
          alt={product.pname}
          height="200"
          width="200"
          image={product.img}

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            {product.pname}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {product.descp}
          </Typography> */}
          <Typography variant="body2" color="text.primary">
            Price: INR {product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined" color="primary">
            Share
          </Button>
          <Button size="small" onClick={handleOpen} variant="outlined" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
        {/* <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'black'}} >
            {product.img} */}
            {/* <CardMedia
          component="img"
          alt={product.pname}
          height="100"
          width="200"
          image={product.img}

        /> */}
       <center> <img src={product.img} alt=""  style={{width:'100px',height:'100px',}}  /></center>
          {/* </Typography> */}
         <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'black',fontSize:'25px', fontStyle:'bold',}}>
            {product.pname}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          </Typography>
           <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'black'}}>
           Price: INR {product.price}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'black',fontSize:'10px'}}>
            {product.descp}
          </Typography>
        </Box>
      </Modal>
    </>

  );
};

export default ImgMediaCard;
