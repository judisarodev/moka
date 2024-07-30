import React, { useEffect, useState } from "react";
import './products.css';
import { Container } from "../container/Container";
import { Text } from "../text/Text";
import { Footer } from "../footer/Footer";
import { Dropdown } from 'primereact/dropdown';
import { CardComponent } from "../card/CardComponent";
import { WhatsappButton } from "../whatsapp-button/WhatsappButton";


const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        async function fetchCakes(){
            try {
                let url = 'https://backend.mokatortas.com/api/client/get-all-products';
                if(selectedCategory.typeId && selectedCategory.typeId !== 0){
                    url = 'https://backend.mokatortas.com/api/client/get-all-products/' + selectedCategory.typeId;
                }
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setCakes(data);
                console.log(cakes); 
            } catch (error) {
                console.error('Error fetching cakes:', error);
            }
        }

        fetchCakes();
    }, [selectedCategory]);

    useEffect(() => {
        async function fetchCategories(){
            try {
                const response = await fetch('https://backend.mokatortas.com/api/client/get-all-product-types', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        }

        fetchCategories(); 
    }, []);

    return(<>
        <Container>
            <div className="products__banner">
                <div className="banner__text-box d-flex flex-column justify-content-center  ">
                    <h1>Encuentra tu torta ideal</h1>
                    <p>Variedad de tortas y ponqués diferentes para guiar tu decision</p>
                </div>
            </div>

            <section className="container">
                <div className="article">
                    <br></br>
                    <br></br>
                    <br></br>
                    <label className="products__label">Elige una categoría</label>
                    <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name" 
                    placeholder="Selecciona una categoría" className="w-full md:w-14rem products__input " />
                    <br></br>
                    <br></br>
                </div>

                <div className="article products__cards-container">
                    {
                        cakes.map((cake) => {
                            return <CardComponent key={cake.productId} productId={cake.productId} title={cake.name} fileName={cake.fileName}  />
                        })
                    }
                </div>
            </section>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Container>     
        <Footer />   
    </>);
}

export { Products }; 