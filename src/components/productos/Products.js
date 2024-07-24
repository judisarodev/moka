import React, { useState } from "react";
import './products.css';
import { Container } from "../container/Container";
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import { Footer } from "../footer/Footer";
import { Dropdown } from 'primereact/dropdown';


const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = [
      {
        id: 1,
        name: 'Todas las categorías'
      },
      {
        id: 2,
        name: 'Amor'
      },
      {
        id: 2,
        name: 'Cumpleaños'
      },
    ];
    return(<>
        <Container>
            <div className="products__banner">
                <div className="banner__text-box d-flex flex-column justify-content-center  ">
                    <h1>Encuentra tu torta ideal</h1>
                    <p>Variedad de tortas y ponqués diferentes para guiar tu decision</p>
                </div>
            </div>

            <section className="container">
                <div>
                    <Dropdown value={selectedCategory} onChange={(e) => setSelectedCategory(e.value)} options={categories} optionLabel="name" 
                    placeholder="Selecciona una categoría" className="w-full md:w-14rem products__input" />
                </div>
            </section>

        </Container>     
        <Footer />   
    </>);
}

export { Products }; 