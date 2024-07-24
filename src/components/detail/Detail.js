import React from "react";
import './detail.css';
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import { Container } from "../container/Container";
import { Footer } from "../footer/Footer";
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { locale, addLocale } from 'primereact/api';
import { Gallery } from "../gallery/Gallery";
import { FaWhatsapp } from "react-icons/fa";

const Detail = () => {

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });
    
    locale('es');
    
    const { productId } = useParams();

    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState('');
    const [fileName, setFileName] = useState('');
    const [date, setDate] = useState('');
    const [detail, setDetail] = useState('');
    const today = new Date();

    useEffect(() => {
        window.scrollTo(0, 0);
        async function getProductDetail(){
            try {
                const url = 'https://backend.mokatortas.com/api/client/get-product-detail/' + productId;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setTitle(data.name);
                setCategories([...data.categories]);
                setDescription(data.description);
                setFileName(data.fileName);
            } catch (error) {
                console.error('Error fetching cakes:', error);
            }
        }

        getProductDetail();
    }, [productId]);

    return(<>
        <Container>
            <section className="container">
                <br></br>
                <br></br>
                <br></br>
                <div className="section detail__container">
                    <div className="detail__image-container">
                        <img src={`https://backend.mokatortas.com/images/${fileName}`} className="detail__image" alt="imagen" style={{ width:'400px' }}/>
                    </div>
                    <div className="detail__info-container">
                        <Title>{ title }</Title>
                        <br></br>
                        <Text><strong>Descripción: </strong>{ description }</Text>
                        <Text><strong>Categorías </strong></Text>
                        <ul className="detail__categories-list">
                            {
                                categories.map((category) => {
                                    return <li className="detail__type">{ category }</li>
                                })
                            }
                        </ul>
                        <Text>
                            ¿Para qué fechas la necesitas? (opcional)
                            <Calendar minDate={today} dateFormat="dd/mm/yy" touchUI  value={date} onChange={(e) => setDate(e.value)} />
                        </Text>

                        <Text>
                            Detalles del pedido (opcional)
                            <InputTextarea value={detail} onChange={(e) => setDetail(e.target.value)} rows={5} cols={30} />
                        </Text>
                        
                        <button className="whatsapp-button">
                            <a href={`https://wa.me/573027343613?text=${'Hola, Moka, estoy interesado en la torta https://mokatortas.com/detalle/'}${productId}${date ? ' Fecha: ' + date.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}) : ''}${detail ? ' Especificaciones: '+ detail : ''}`} target="_blank" rel="noreferrer">
                                <div className="d-flex align-items-center gap-1">
                                    <FaWhatsapp size={25}/>
                                    Ordenar por Whatsapp
                                </div>
                            </a>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <br></br>
                <br></br>
                <br></br>
                <Gallery title={'¿Aún no decides? '} text={'Más opciones'} typeId={2}/>
            </section>
        </Container>
        <Footer />
    </>);
}

export { Detail };