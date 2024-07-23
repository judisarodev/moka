import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import './menu.css';
import { Context } from "../../context/ContextProvider";

const menuOptions = [
    { name: 'Inicio', url: '/' },
    { name: 'Productos', url: '/productos' },
    { name: 'Sobre nosotros', url: 'sobre-nosotros' },
];

function Menu(){
    const [ isOpen, setIsOpen ] = useState(false);
    const windowSizes = { SMALL : 'SMALL', LARGE : 'LARGE' };
    const [ windowSize, setWindowSize ] = useState(window.innerWidth < 800 ? windowSizes.SMALL : windowSizes.LARGE);
    const navigate = useNavigate();
    const { show, setShow } = useContext(Context); 

    useEffect(() => {
        window.addEventListener("resize", () => {
            if(window.innerWidth < 800){
                setWindowSize(windowSizes.SMALL);
                return;
            }
            setWindowSize(windowSizes.LARGE);
        });

    }, []);

    function setScreen(url){
        setIsOpen(!isOpen);
        setShow(true);
        navigate(url);
    }

    function hideShowDropDownMenu(){
        setShow(!show);
        setIsOpen(!isOpen);
    }

    const menuStyles = {
        height: windowSize === windowSizes.SMALL && isOpen ? '100vh' : '65px',
        backgroundColor: '#E08492'
    };

    return(
        <nav className="container-fluid menu-container" style={ menuStyles }>
            <div className="d-flex flex-row align-items-center main-menu" style={{height: '65px'}}>

                <div className="d-flex w-100 justify-content-between">
                    <div className="d-flex">
                        {windowSize === windowSizes.SMALL && <div className="clickable d-flex align-items-center" onClick={ hideShowDropDownMenu }>
                            { isOpen ? <IoCloseOutline color="white" size={30} className="main-menu__icon"/> : <IoIosMenu size={30} color="white" className="main-menu__icon"/> }
                        </div>}

                        <Link className="nav-link" to={'/'}>
                            <p className="main-menu__item">Moka</p>
                        </Link>

                        { windowSize === windowSizes.LARGE && <div className="d-flex">
                            <ul className="navbar-nav d-flex flex-row justify-content-center">
                                {   menuOptions.map(option => 
                                        <li className="nav-item main-menu__item" onClick={ () => setScreen(option.url) } key={option.url}>
                                            <p className="clickable">{ option.name }</p>
                                        </li>
                                    ) 
                                }
                            </ul>
                        </div> }
                    </div>

                    <div className="align-self-center">
                        Logo    
                    </div>
                </div>
            </div>

            { isOpen && windowSize === windowSizes.SMALL? 
                    <ul className="d-flex navbar-nav drop-down--menu">
                        {   menuOptions.map(option => 
                                <li className="nav-item main-menu__item" onClick={ () => setScreen(option.url) }>
                                    <p className="clickable">{ option.name }</p>
                                </li>
                            ) 
                        }
                    </ul>
                : <></> }
        </nav>
    );
}

export { Menu }; 