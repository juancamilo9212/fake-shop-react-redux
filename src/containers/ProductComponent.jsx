import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const ProductComponent = () => {
    const products= useSelector(state => state.allProducts.products);
    const renderProductList = products.map(product => {
        const {id,title,price,image,category} = product;
        const url = `/product/${id}`;
        return (
            <div className="four column wide">
            <Link to={url}>
            <div className="ui link cards" key={id}>
                    <div className ="card">
                    <div className ="image">
                        <img src={image} alt={title}/>
                    </div>
                    <div className ="content">
                        <div className="header">{title}</div>
                        <div className="meta price">$ {price}</div>
                        <div className="meta">$ {category}</div>
                    </div>
                    </div>
            </div>
            </Link>
            </div>
        )
    });

    return(<>{renderProductList}</>);
}

export default ProductComponent;