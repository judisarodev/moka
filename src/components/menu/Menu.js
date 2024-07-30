import React, { useContext, useEffect, useState  } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { Context } from "../../context/ContextProvider";
import './menu.css';

const menuOptions = [
    { name: 'Inicio', url: '/' },
    { name: 'Productos', url: '/productos' },
    { name: 'Sobre nosotros', url: '/sobre-nosotros' },
];

function Menu(){
    const [ isOpen, setIsOpen ] = useState(false);
    const windowSizes = { SMALL : 'SMALL', LARGE : 'LARGE' };
    const [ windowSize, setWindowSize ] = useState(window.innerWidth < 800 ? windowSizes.SMALL : windowSizes.LARGE);
    const navigate = useNavigate();
    const { show, setShow } = useContext(Context); 
    const location = useLocation();

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
        height: windowSize === windowSizes.SMALL && isOpen ? '110vh' : '60px',
        backgroundColor: '#E08492'
    };

    const selectedMenuOption = {
        backgroundColor: '#D76077',
        color: 'white'
    }

    return(
        <nav className="container-fluid menu-container" style={ menuStyles }>
            <div className="d-flex flex-row align-items-center main-menu">

                <div className="d-flex w-100 align-items-center justify-content-center" style={{height: '60px'}}>
                    <div className="d-flex align-items-center">
                        {windowSize === windowSizes.SMALL && <div className="clickable d-flex align-items-center" onClick={ hideShowDropDownMenu }>
                            { isOpen ? <IoCloseOutline color="white" size={30} className="main-menu__icon"/> : <IoIosMenu size={30} color="white" className="main-menu__icon"/> }
                        </div>}

                        { windowSize === windowSizes.LARGE && <div className="d-flex">
                            <ul className="navbar-nav d-flex flex-row justify-content-center gap-5">
                                {   menuOptions.map(option => 
                                        <li className="nav-item main-menu__item" onClick={ () => setScreen(option.url) } key={option.url}>
                                            {
                                                location.pathname === option.url ? <p className="clickable" style={selectedMenuOption}>{ option.name }</p> 
                                                : <p className="clickable">{ option.name }</p> 
                                            }
                                            
                                        </li>
                                    ) 
                                }
                            </ul>
                        </div> }
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