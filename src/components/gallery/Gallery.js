import React, { useEffect, useState } from "react";
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import './gallery.css';
import { Carousel } from 'primereact/carousel';

const productTemplate = (product) => {
    return (
        <div className="product-item">
            <div className="product-image" style={{height: '600px', minWidth: '320px', padding:'20px'}}>
                <img style={{border: '1px gray solid'}} src={product.image} alt={`Product ${product.id}`}className="gallery__image"/>
            </div>
        </div>
    );
}

function Gallery({ title, text, typeId }) {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        fetch('https://backend.mokatortas.com/api/client/get-random-cakes/'+typeId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        })
        .then((response) => response.json())
        .then((data) => {
            const arr = [];
            for(const d of data){
                arr.push({ id: d.productId, image: 'https://backend.mokatortas.com/images/' + d.fileName});
            }
            console.log(products); 
            setProducts(arr);
        })
        .catch((error) => console.log(error));;
    }, []);

    const responsiveOptions = [
        {
            breakpoint: '1080px', 
            numVisible: 4,       
            numScroll: 1         
        },
        {
            breakpoint: '990px', 
            numVisible: 3,       
            numScroll: 1         
        },
        {
            breakpoint: '768px', 
            numVisible: 2,       
            numScroll: 1         
        },
        {
            breakpoint: '560px', 
            numVisible: 1,       
            numScroll: 1         
        }
    ];

    return (
        <article style={{padding:'20px'}}>
            <div className="container">
                <Title>{title}</Title>
                <Text>{text}</Text>
            </div>
            <Carousel 
                value={products} 
                numVisible={4} 
                numScroll={1} 
                className="custom-carousel" 
                responsiveOptions={responsiveOptions}
                circular
                autoplayInterval={6000} 
                itemTemplate={productTemplate} 
            />
        </article>
    );
}

export { Gallery };
