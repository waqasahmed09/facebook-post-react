import React from "react";
import FbImageLibrary from 'react-fb-image-grid'
import { useState, useEffect } from "react";
import "./App.css"

function Fbost() {
    const [product, setProducts] = useState([]);


    useEffect(function () {
        getApi();
    }, [])

    function getApi() {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => setProducts(res.products))
    }

    if (!product.length) {
        return <> <h2>loading.........</h2> </>
    }
    return <>
    
    <div className="facebook-post">
        <div className="main-card">


        {product.map(function (item, index) {
            return <div className="product-card">
                <div className="card-post">
                  <span className="profile-header">
                      <img className="profile-image"  />
                    <h1>  {item.title}  </h1>
                    </span>
                    <h3> New Year Offer. 24% discount</h3>
                    <p> Rs.  {item.price} </p>
                    <p> {item.description} </p>
                    <FbImageLibrary images={item.images} />
                    <div className="all-buttons">
                        <button > like </button>
                        <button>comment</button>
                        <button>share</button>
                    </div>  
                </div>
            </div>
        })}
        </div>
                </div>
    </>

}

export default Fbost;
