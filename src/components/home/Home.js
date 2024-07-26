import './home.css';
import React, { useRef } from "react";
import { Container } from "../container/Container";
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import { ListItem } from "../list-item/ListItem";
import { Gallery } from "../gallery/Gallery";
import { WhatsappButton } from '../whatsapp-button/WhatsappButton';
import { Footer } from '../footer/Footer';
import logo from './../../assets/marca/logo.png';


function Home(){

    const cakesRef = useRef(null);

    const listItems = [
        { index: '1', text: 'Elige un modelo de pastel o postre que te guste' },
        { index: '2', text: 'Cuéntanos la fecha y los detalles de tu pedido' },
        { index: '3', text: 'Disfruta de Moka con quienes más amas y aprecias' }
    ];

    return(
        <Container>
            <div className="banner" >
                <div className="banner__text-box">
                    <img onClick={() => { cakesRef.current.scrollIntoView({ behavior: 'smooth' }) }} src={logo} alt='logo' className='banner__logo'/>
                </div>
            </div>

            <section className="container">
                <Title>¿Quieres sorprender a alguien que amas?</Title>
                <Text>
                ¡Bienvenidos a Moka! Donde la magia se mezcla con la harina, creamos delicias que te harán sonreír.
                En Moka, cada bocado cuenta una historia de amor. 
                </Text>
                
                <br></br>
                <ul className='p-0'>
                    {listItems.map((i) => {
                        return <ListItem key={i.index} index={i.index} text={i.text}/>
                    })}    
                </ul>
            </section>
            
            <section ref={cakesRef}>
                <Gallery title={'Tortas temáticas '} text={'Cumpleaños, fiestas, primeras comuniones y más.'} typeId={6}/>
                <Gallery title={'Para ocaciones especiales'} text={'Aniversarios, sorpresas y San Valentín '} typeId={3}/>
                <Gallery title={'Deportes '} text={'Revive la emoción del football y el deporte'} typeId={7}/>
            </section>

            <section className="container">
                <Title>Preguntas frecuentes</Title>
                <br></br>
                <FrecuentQuestion question={'¿Qué métodos de pago son aceptados?'} answer={'Aceptamos distintos métodos de pago como: efectivo, Nequi y Daviplata.'}/>
                <FrecuentQuestion question={'¿Es necesario hacer un depósito?'} answer={'Sí, al momento de confirmar la torta o postre, debes realizar un depósito de al menos el 40% de la compra. '}/>
                <FrecuentQuestion question={'¿Las tortas se entregan a domicilio?'} answer={'Por supuesto, tu pedido puede ser entregado en Bucaramanga, Floridablanca o Girón. '}/>
                <div>
                    <FrecuentQuestion question={'¿Tienes más preguntas?'}/>
                    <WhatsappButton />
                </div>
            </section>
            <Footer />
        </Container>
    );
}


function FrecuentQuestion({ question, answer }) {
    return(
        <div>
            <Text primary={true}>
                { question }
            </Text>
            <Text> 
                { answer }
            </Text>
        </div>
    );
}

export { Home }; 