import React from "react";
import { Box, IconButton } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { history } from "../Assets/history";
import Logo from "../Assets/logo.png"
export default class Topbar extends React.Component{
    render(){
        return(
            <Box style={{width:"100%", display:"flex", justifyContent:"space-between", boxShadow:'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'}}>
                <img src={Logo} alt='cart' style={{height:25, width:179, marginTop:10, cursor:'pointer'}} onClick={()=>history.push('/')}/>
                <IconButton onClick={()=>history.push('./cart')}>
                    <ShoppingCartIcon/>
                </IconButton>
            </Box>
        )
    }
}