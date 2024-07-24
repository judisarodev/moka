import React, { useEffect, useState } from "react";
import './products.css';
import { Container } from "../container/Container";
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import { Footer } from "../footer/Footer";
import { Dropdown } from 'primereact/dropdown';
import { CardComponent } from "../card/CardComponent";


const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([
      {
        id: 0,
        name: 'Todas las categorías'
      }
    ]);

    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        async function fetchCategories(){
            try {
                let url = 'https://backend.mokatortas.com/api/client/get-all-product-types';
                if(selectedCategory.typeId !== 0){
                    url = 'https://backend.mokatortas.com/api/client/get-all-product-types/' + selectedCategory.typeId;
                }
                const response = await fetch(url, {
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

        async function fetchCakes(){
            try {
                const response = await fetch('https://backend.mokatortas.com/api/client/get-all-products', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setCakes(data);
                console.log(data); 
            } catch (error) {
                console.error('Error fetching cakes:', error);
            }
        }

        fetchCategories(); 
        fetchCakes();
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
                    <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name" 
                    placeholder="Selecciona una categoría" className="w-full md:w-14rem products__input " />
                    <br></br>
                </div>

                <div className="article products__cards-container">
                    {
                        cakes.map((cake) => {
                            return <CardComponent title={cake.name} url={cake.fileName} />
                        })
                    }
                </div>
            </section>

        </Container>     
        <Footer />   
    </>);
}

export { Products }; 