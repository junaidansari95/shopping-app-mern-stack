import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../Actions/cartAction";
import {
  CardActions,
  CardHeader,
  CardMedia,
  Card,
  Typography
} from "@material-ui/core";
import { history } from "../Assets/history";

const styles = theme => ({
  root: {
    width: 345,
    margin: 10,
    cursor: "pointer"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
})
class ProductCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
    const {classes} = this.props;
    let location = "Location: "+this.props.product.location
    return (
      <Card className={classes.root} onClick={()=>history.push({pathname:'/product-detail', state: this.props.product})}>
        <CardHeader title={this.props.product.name} subheader={location}/>
        <CardMedia
          className={classes.media}
          image={this.props.product.image[0]}
        />
        <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body1" gutterBottom align="center">
           Price: ₹ {this.props.product.price}
          </Typography>
        </CardActions>
      </Card>
    )
  }
}
const mapStateToProps = state => {
  const { cart } = state
  return ({ cart })
};
export default connect( mapStateToProps,{ addToCart })(withRouter(withStyles(styles)(ProductCard)));