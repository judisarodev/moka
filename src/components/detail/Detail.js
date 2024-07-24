import React from "react";
import './detail.css';
import { useEffect } from "react";
import { useState } from "react";
import { Sidebar } from 'primereact/sidebar';

const Detail = ({ productId, visible, setVisibility }) => {

    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [description, setDescription] = useState('');
    const [fileName, setFileName] = useState('');
    //const [date, setDate] = useState('');
    //const [detail, setDetail] = useState('');

    useEffect(() => {
        if(productId){
            setVisibility(true);
        }
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
                setCategories(data.types);
                setDescription([...data.categories]);
                setFileName(data.fileName);
            } catch (error) {
                console.error('Error fetching cakes:', error);
            }
        }

        getProductDetail();
    }, [productId, setVisibility]);

    return(<>
        <div>
        <Sidebar visible={false} position="bottom" fullScreen className="sidebar__container" onHide={() => setVisibility(false)}>
            <img className="sidebar__image" alt="imagen" src={`https://backend.mokatortas.com/images/${fileName}`}/>
            <p>{ title }</p>
            <p>{ categories ? categories.join(', ') : '' }</p>
            <p>{ description }</p>
        </Sidebar>
        </div>
    </>);
}

export { Detail };