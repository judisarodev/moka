import './about.css';
import React from 'react';
import { Footer } from '../footer/Footer';
import { Container } from "../container/Container";
import { Title } from '../title/Title';
import { Text } from '../text/Text';
import imagen from './../../assets/about/about1.jpg';

const Value = ({ title, text }) => {
    return(<>
        <li className='value__container'>
            <p className='value__title'>{ title }</p>
            <Text>{ text }</Text>
        </li>
    </>);
}

const About = () => {

    const valuesArr = [
        {
            id: 1,
            title: 'CALIDAD ARTESANAL',
            text: 'Creaciones con ingredientes de la más alta calidad, elaboradas con destreza y atención meticulosa para ofrecer experiencias culinarias excepcionales.'
        },
        {
            id: 2,
            title: 'CREATIVIDAD INSPIRADA',
            text: 'Creaciones con ingredientes de la más alta calidad, elaboradas con destreza y atención meticulosa para ofrecer experiencias culinarias excepcionales.'
        },
        {
            id: 3,
            title: 'SERVICIO ENCANTADOR',
            text: 'Creaciones con ingredientes de la más alta calidad, elaboradas con destreza y atención meticulosa para ofrecer experiencias culinarias excepcionales.'
        },
        {
            id: 4,
            title: 'COMPROMEDITOS CON LA SALUD',
            text: 'Creaciones con ingredientes de la más alta calidad, elaboradas con destreza y atención meticulosa para ofrecer experiencias culinarias excepcionales.'
        },
    ];

    return(<>
        <Container>
            <div className="about__banner">
                <div className="banner__text-box d-flex flex-column justify-content-center">
                    <h1>Sobre nosotros</h1>
                    <p>Nos apasiona lo que hacemos, endulzar tus momentos especiales es nuestro propósito</p>
                </div>
            </div>

            <br></br>
            <br></br>

            <div className='container'>
            <section className="about__info">
                <div>
                    <Title>¿Una pasión que se transforma en realidad</Title>
                    <br></br>
                    <Text>
                        En el corazón de Moka, la pasión por la repostería se fusiona con la 
                        creatividad y el compromiso de brindar experiencias irresistibles. 
                        Fundada con amor, nuestra historia está tejida con hilos de dedicación 
                        y un toque artesanal. 
                    </Text>
                    <Text>
                        Desde los primeros suspiros de la masa hasta la exquisita obra final, 
                        cada pastel, cada postre, es una expresión única de nuestro compromiso 
                        con la excelencia. Nos enorgullece ofrecer sabores que despiertan alegrías 
                        y momentos que endulzan los recuerdos. 
                    </Text>
                    <Text>
                        En Moka, no solo horneamos pasteles, creamos momentos de deleite que 
                        se convierten en recuerdos duraderos. Acompáñanos en este viaje de sabores 
                        exquisitos y descubre la historia detrás de cada bocado. ¡Bienvenido a 
                        nuestro mundo, donde la dulzura encuentra su hogar!
                    </Text>
                </div>
                <div>
                    <img src={imagen} alt={'Imagen about'}/>
                </div>
            </section>
            </div>

            
            <br></br>
            <br></br>

            <div className='about__values'>
                <section className="container">
                    <Title>Nuestros valores</Title>
                    <br></br>
                    <ul className='values_list__container'>
                        {
                            valuesArr.map((value) => {
                                const title = value.title;
                                const text = value.text;
                                return(<Value key={value.id} title={title} text={text} />)
                            })
                        }
                    </ul>    
                </section>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </Container>     
        <Footer />   
    </>);
}

export { About }; 