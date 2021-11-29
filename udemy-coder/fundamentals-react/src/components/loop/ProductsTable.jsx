import "./ProductsTable.css";
import React from "react";
import products from "../../data/products";

export default (props) => {
    function getProducts() {
        return products.map((product, i) => {
            return (
                <tr className={i % 2 === 0 ? "Even" : ""} key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                </tr>
            );
        });
    }

    return (
        <div className="ProductsTable">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
                {getProducts()}
            </table>
        </div>
    );
};
