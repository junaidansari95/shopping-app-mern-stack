import React from 'react';
import '../App.css';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCartItems, deleteCartItem } from "../Actions/cartAction";
import { history } from '../Assets/history'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton, Box, Typography, Button } from '@material-ui/core';
class Cart extends React.Component {
    // static getDerivedStateFromProps(props, state) {
    //     if
    // }
    componentDidMount(){
        this.props.getCartItems()
    }
    handleRemoveProduct = (cartItem) => {
        this.props.deleteCartItem(cartItem)
    }
    render() {
        const { all_cartItems } = this.props;
        let totalPrice = Number(0);
        if(all_cartItems){
            all_cartItems.forEach(cartItem => {
                totalPrice += Number(cartItem.price)
            })
        }
        return (
            <Box style={{ display: 'flex', flexDirection: 'column', maxWidth: 800, margin: 'auto', marginTop: 24, marginBottom: 48 }}>
                <Box>
                    <IconButton onClick={() => history.push('/')} >
                        <ArrowBackIcon />
                        <Typography variant="h4" gutterBottom align='center'>Back to Shopping Point</Typography>
                    </IconButton>
                </Box>
                <Box>
                    {
                        all_cartItems ? all_cartItems.map((cartItem) => <Box key={cartItem.image} className='cart-item-box' >
                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 10 }}>
                            <Typography variant="h6" gutterBottom>{cartItem.name}</Typography>
                            <img src={cartItem.image} style={{ height: 250, width: 'auto' }} alt='productImage' />
                        </Box>
                        <Box>
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            style={{ marginTop: 24, marginRight: 10 }}
                            onClick={()=>this.handleRemoveProduct(cartItem._id)}>
                            Remove Product
                        </Button>
                        <Typography variant="h4" gutterBottom style={{ marginTop: 24, marginRight: 10 }}>₹ {cartItem.price}</Typography>
                        </Box>
                    </Box>) : null
                    }
                </Box>
                <Typography variant="h4" gutterBottom style={{ display: 'flex', justifyContent: 'flex-end' }}>Total: ₹ {totalPrice}</Typography>
                <Button
                    variant="outlined"
                    size="small"
                    color="primary" onClick={()=>history.push('/checkout')}>
                    Checkout
                </Button>
            </Box>
        )
    }
}
const mapStateToProps = state => {
    const { cart } = state;
    const { all_cartItems } = cart;
    return ({ all_cartItems })
};
export default connect(mapStateToProps, { getCartItems, deleteCartItem })(withRouter(Cart));