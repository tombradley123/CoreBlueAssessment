import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/esm/Container';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (this.props.handler) {
            this.props.handler(event.target.value);
        }
    }

    render() {
        return (
            <Container>
            <div>Search Boats</div>
            <input type="text" onChange={this.handleChange}/>
            </Container>
        );
    }
}

Search.propTypes = {
    handler: PropTypes.func
};

export default Search;