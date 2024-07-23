import React, { useEffect, useState } from "react";
import { Title } from "../title/Title";
import { Text } from "../text/Text";
import img from './../../assets/home/cake.jpeg';
import img2 from './../../assets/home/cupcake.jpg';
import img3 from './../../assets/home/cupcakes.jpg';
import img4 from './../../assets/home/pastelito.png';
import './gallery.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Gallery({ title, text, images }){

    const data = images ? images : [
        { id: 1, image: img},
        { id: 2, image: img2},
        { id: 3, image: img3},
        { id: 4, image: img4},
        { id: 5, image: img2},
        { id: 6, image: img3},
        { id: 7, image: img4},
        { id: 8, image: img2},
        { id: 9, image: img3},
        { id: 10, image: img4}
    ];
    
    const [index, setIndex] = useState(0);
    const [windowWith, setWindowWith] = useState();

    useEffect(() => {
        setWindowWith(window.innerWidth);

        const resizeListener = () => {
            setWindowWith(window.innerWidth);
        }
        window.addEventListener('resize', resizeListener);
        
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    function goRiht() {
        if(index < data.length) { 
            setIndex(index + 1);
        }else{
            setIndex(0);
        }
    }

    function goLeft() {
        if(index > 0) { 
            setIndex(index - 1);
        }else{
            setIndex(data.length);
        }
    }

    function getPictures(){
        let length = Math.floor(windowWith/400);
        let pos = 0; 
        let arr = [];
        
        for(let i = 0; i < length; i++){
            if((index + pos) >= data.length ){
                setIndex(0);
                pos = 0; 
            }
            arr.push(data[index + pos]);
            ++pos;
        }
        
        console.log("arr", arr); 
        return arr;
    }
    
    return(
        <article>
            <div className="container">
                <Title>{ title }</Title>
                <Text>{ text }</Text>
            </div>
            <div className="gallery">
                
                <div className="container d-flex align-items-center justify-content-center gap-5">
                    <button className="gallery__arrow" onClick={goLeft}><IoIosArrowBack /></button>
                    
                    {/*getPictures().map((i)=>{
                        return <img src={i.image} alt={'cake'} height={140} width={140} className="gallery__image"/>
                    })*/
                    getPictures().map((i)=>{
                        return <p>{ i.id }</p>
                    })}

                    <button className="gallery__arrow" onClick={goRiht}><IoIosArrowForward /></button>
                </div>
                
            </div>
        </article>
    );
}

export { Gallery };