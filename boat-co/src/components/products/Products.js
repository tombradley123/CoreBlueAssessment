import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductItem from "../productItem/ProductItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Products extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.productsData.map((product) => (
            <ProductItem
              className="col-md-4"
              key={product.id}
              title={product.title}
              picture={product.picture}
              about_short={product.about_short}
              about_long={product.about_long}
              cost={product.cost}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

Products.propTypes = {
  productsData: PropTypes.array.isRequired,
};

export default Products;
