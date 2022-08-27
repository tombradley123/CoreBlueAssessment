import React, {Component} from 'react';
import Products from './components/products/Products';
import Search from './components/search/Search';
import BoatNavbar from './components/boatNavbar/BoatNavbar'
import api from './apiEndpoints.json';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.saveProductApiData = this.saveProductApiData.bind(this);
        this.filterProductsBySearch = this.filterProductsBySearch.bind(this);
        this.allProducts = [];
        this.state = {
            products: [],
            selectedCategory: ''
        };
    }

    saveProductApiData(data) {
        this.allProducts = data;
        this.setState({products: data});
        return data;
    }

    getBoatData(){
        return fetch(api.GET_BOATS)
    }
    componentDidMount() {
        let products = this.getBoatData();
        
        Promise.all([products])
            .then(response => {
                    let productData = response[0];

                    if (productData.status !== 200) {
                        console.log('Looks like there was a problem getting boat data.');
                        return;
                    }

                    productData.json().then(data => {
                        this.saveProductApiData(data.data);
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error', err);
            });
    }

    filterProductsBySearch(query) {
        let products = this.allProducts,
            filteredProducts;

        query = query.toLowerCase();
        filteredProducts = products.filter(product => {
            // filter any match to the title/descriptions
            let queryInTitle = product.title.toLowerCase().includes(query);
            let queryInShortDesc = product.about_short.toLowerCase().includes(query);
            let queryInLongDesc = product.about_long.toLowerCase().includes(query);
            return queryInTitle || queryInShortDesc || queryInLongDesc;
        });
        this.setState({products: filteredProducts});
        return filteredProducts;
    }

    render() {
        return (
            <div className="app">
                <BoatNavbar/>
                <Search handler={this.filterProductsBySearch}/>
                <Products productsData={this.state.products}/>
            </div>
        );
    }
}

export default App;