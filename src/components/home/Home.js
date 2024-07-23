    import './home.css';
import React from "react";
import { Container } from "../container/Container";
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import { ListItem } from "../list-item/ListItem";
import { Gallery } from "../gallery/Gallery";
import { WhatsappButton } from '../whatsapp-button/WhatsappButton';

function Home(){

    const listItems = [
        { index: '1', text: 'Elige un modelo de pastel o postre que te guste' },
        { index: '2', text: 'Cuéntanos la fecha y los detalles de tu pedido' },
        { index: '3', text: 'Disfruta con tus más amados' }
    ];

    return(
        <Container>
            <div className="banner">
                <div className="banner__text-box d-flex flex-column justify-content-center  ">
                    <h1>Tortas personalizadas en Bucaramanga</h1>
                </div>
            </div>

            <section className="container">
                <Title>¿Quieres sorprender a alguien que amas?</Title>
                <Text>
                ¡Bienvenidos a Moka! Donde la magia se mezcla con la harina, creamos delicias que te harán sonreír.
                En Moka, cada bocado cuenta una historia de amor. 
                </Text>

                <ul className='p-0'>
                    {listItems.map((i) => {
                        return <ListItem key={i.index} index={i.index} text={i.text}/>
                    })}    
                </ul>
            </section>
            
            <section>
                <Gallery title={'Para niños'} text={'Fiestas de cumpleaños, primeras comuniones, baby showers y graduaciones'}/>
                <Gallery title={'Para tu pareja'} text={'Aniversarios, sorpresas, San Valentín y amor'}/>
                <Gallery title={'Tortas temáticas '} text={'Cumpleaños, fiestas, despedidas de soltero y más.'}/>
                <Gallery title={'Cupcakes y chocolates '} text={'Para toda ocasión.'}/>
            </section>

            <section className="container d-flex flex-column gap-3">
                <Title>Preguntas frecuentes</Title>
                <FrecuentQuestion question={'¿Qué métodos de pago son aceptados?'} answer={'Aceptamos distintos métodos de pago como: efectivo, Nequi y Daviplata.'}/>
                <FrecuentQuestion question={'¿Es necesario hacer un depósito?'} answer={'Sí, al momento de confirmar la torta o postre, debes realizar un depósito de al menos el 40% de la compra. '}/>
                <FrecuentQuestion question={'¿Las tortas se entregan a domicilio?'} answer={'Por supuesto, tu pedido puede ser entregado en Bucaramanga, Floridablanca o Girón. '}/>
                <div>
                    <FrecuentQuestion question={'¿Tienes más preguntas?'}/>
                    <WhatsappButton />
                </div>
            </section>
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