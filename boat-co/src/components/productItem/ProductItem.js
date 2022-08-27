import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.productDescription = this.productDescription.bind(this);
        this.productHeaderClasses = this.productHeaderClasses.bind(this);
        this.state = {hidden: true};
    }

    productHeaderClasses() {
        return this.state.hidden ?
            'product__header' : 'product__header product__header--bold';
    }

    productDescription() {
        if (!this.state.hidden) {
            return (
                <div className="product__description">
                    {this.props.description}
                </div>
            );
        }
        return null;
    }

    handleClick() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    render() {
        return (
            <Card style={{ width: '24rem' }}>
                <Card.Img variant="top" src={this.props.picture}/>
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.cost}</Card.Text>
                <Card.Text>
                    {this.props.about_short}
                </Card.Text>
                <Button variant="primary">Purchase</Button>
                </Card.Body>
            </Card>
        );
    }
}

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
};

export default ProductItem;