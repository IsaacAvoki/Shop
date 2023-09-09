import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context';
import '../css/Products.css';

export class Products extends Component {
    static contextType = DataContext;

    render() {
        const { products, addCart } = this.context;

        // Define the URL of the proteine image
        const proteineImageURL = 'https://images.unsplash.com/photo-1579722822280-a3d601518cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb3RlaW4lMjBwb3dkZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60';

        return (
            <div id="product">
                <section
                    className="proteine-section"
                    style={{
                        backgroundImage: `url(${proteineImageURL})`,
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <h2>Ventes des chaussures, protéines et accessoires de sport</h2>
                </section>
                {
                    products.map(product => (
                        <div className="card" key={product._id}>
                            <Link to={`/product/${product._id}`}>
                                <img src={product.src} alt="" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                                </h3>
                                <span>${product.price}</span>
                                <p>{product.description}</p>
                                <button onClick={() => addCart(product._id)}>Détails du produit</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Products;
