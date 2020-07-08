import React from "react";
import '../App.css';
import { Box, OutlinedInput, InputAdornment, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ProductCard from "./ProductCard";
import products from "../Assets/products";
import Topbar from "./Topbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../Actions/productActions";

class Main extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: products,
            searchString: '',
            locFilter: ''
        };
    }
    componentDidMount() {
        this.props.getProducts();
    }
    handleChange = event => {
        this.setState({ searchString: event.target.value.trim().toLowerCase() });
    }
    handleLoc = event => {
        this.setState({ locFilter: event.target.value })
    }
    render() {
        var { locFilter, searchString } = this.state;
        const { all_products } = this.props;
        let text = this.props.all_products;
        if(all_products){
            if (searchString) {
                text = text.filter(info => info.name.toLowerCase().match(searchString));
            }
        }
        return (
            <Box>
                <Topbar />
                <Box style={{ margin: 'auto', width: 500, display: 'flex', justifyContent: 'space-between', marginTop:180, marginBottom:100 }}>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h4" gutterBottom align='center'>What</Typography>
                        <Typography variant="caption" display="block" color='textSecondary'>Product name</Typography>
                        <OutlinedInput
                            placeholder='Product name' onChange={this.handleChange}
                            endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>} />
                    </Box>
                    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <Typography variant="h4" gutterBottom align='center'>Where</Typography>
                        <Typography variant="caption" display="block" color='textSecondary'>Product location</Typography>
                        <OutlinedInput
                            placeholder='Location' onChange={this.handleLoc}
                            endAdornment={<InputAdornment position="end"><LocationOnIcon /></InputAdornment>} />
                    </Box>
                </Box>
                <Box className="grid-container">
                    <Box className="grid-row">
                    <Typography variant="h4" gutterBottom align='center'>Popular products</Typography>
                        <Box className="grid-row">
                            {
                                all_products ?  text.filter(index => locFilter ? index.address.toLowerCase().includes(locFilter) : true).map(index => {
                                    return <ProductCard className="grid-item" product={index} key={index._id} />
                                }) : null
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}
const mapStateToProps = state => {
    const { products } = state;
    const { all_products } = products;
    return ({ all_products })
};
export default connect(mapStateToProps, { getProducts })(withRouter(Main));