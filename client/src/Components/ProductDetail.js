import React from "react";
import '../App.css';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCartItem } from "../Actions/cartAction";
import { Box, Typography, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Comment from './Comment';
import Topbar from "./Topbar";
class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImage: this.props.location.state.image[0],
        }
    }
    handleSetMainImage = (image) => {
        this.setState({ mainImage: image })
    }
    handleAddtoCart = () => {
        this.props.addCartItem({
            product_id: this.props.location.state._id,
            name: this.props.location.state.name,
            price: this.props.location.state.price,
            image: this.props.location.state.image[0],
            quantity: this.props.location.state.quantity
        })
      }
    render() {
        // console.log("To cart",{product_id: this.props.location.state._id,quantity: this.props.location.state.quantity})
        return (
            <React.Fragment>
                <Topbar />
                <Box className='product-detail-container'>
                <Box className='product-box'>
                    <Typography variant="h3" style={{ textAlign: 'center' }}>{this.props.location.state.name}</Typography><br/>
                    <Box className='image-list'>
                        {this.props.location.state.image.map(image => <Box className='image-list-item' key={image} onMouseOver={() => this.handleSetMainImage(image)}><img src={image} alt='ig' style={{ height: 80, width: 'auto' }} /></Box>)}
                    </Box>
                    <Box className='image-main'>
                        <img src={this.state.mainImage} alt='ig'/>
                    </Box>
                    <Box className='product-description'>
                        <Typography variant="h3">₹&nbsp;{this.props.location.state.price}</Typography>
                        <Typography component="span" variant="body2" style={{ color:"#546E7A", marginTop:10, marginBottom:10 }}>Quantity: {this.props.location.state.quantity}</Typography>
                        <Typography variant="body2">{this.props.location.state.description}</Typography>
                        <Button
                            style={{ marginTop: 15}}
                            variant="outlined"
                            size="small"
                            color="primary"
                            startIcon={<AddIcon />}
                            onClick={this.handleAddtoCart}>
                            Add to cart
                        </Button>
                    </Box>
                </Box>
                <Box className='comment-box'>
                    <Typography variant='h5'>Product reviews</Typography>
                    <Comment all_comments={this.props.location.state.comments}/>
                </Box>
            </Box>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    const { cart } = state
    return ({ cart })
};
export default connect(mapStateToProps, { addCartItem })(withRouter(ProductDetail));