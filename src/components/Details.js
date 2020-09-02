import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id,company,img, info, price, title,inCart} =
                        value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <col-10 className="mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </col-10>
                            </div>
                            {/* end Title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} alt="product" className="img-fluid"/>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>model : {title}</h1>
                                    <h4 className="text-title text uppercase text-muted mt-3 mb-2">
                                        made by : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>{price} €</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Info about the product: 
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    <Link to='/'>
                                        <ButtonContainer>Back to Products</ButtonContainer>
                                    </Link>
                                    <ButtonContainer cart disabled={inCart ? true : false} onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        {inCart?'inCart':'Add to cart'}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
