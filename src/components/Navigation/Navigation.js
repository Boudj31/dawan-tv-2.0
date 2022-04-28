import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navigation.scss"
import SearchIcon from '@mui/icons-material/Search';
import AddAlertIcon from '@mui/icons-material/AddAlert';



const Navigation = () => {
    const [toogleProfil, setToogleProfil] = useState(false)
    const [show, handleShow] = useState(false)
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
       window.addEventListener("scroll", transitionNavBar)
       return () => window.removeEventListener("scroll", transitionNavBar)
    }, []  )

    return (
        <div className={`navigation ${show && "nav__dark"}`}>
            <div className='nav container'>
                <div className='col'>
                    <img src="./img/dwtv.png" alt="" width="130" />
                    <ul className='links'>
                        <li className='link'>
                            <NavLink to="/" exact className="hover ">
                                Accueil
                            </NavLink>
                        </li>
                        <li className='link'>
                            <NavLink to="/" exact className="hover ">
                                Séries
                            </NavLink>
                        </li>
                        <li className='link'>
                            <NavLink to="/" exact className="hover ">
                                Films
                            </NavLink>
                        </li>
                        <li className='link'>
                            <NavLink to="/" exact className="hover ">
                                Nouveautés les plus regardées
                            </NavLink>
                        </li>
                        <li className='link'>
                            <NavLink to="/" exact className="hover ">
                                Ma liste
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div className='col'>
                    <div>
                        <ul className='links'>
                            <li className='link'>
                                <SearchIcon />
                            </li>
                        <li className='link'>
                                <NavLink to="/" exact className="hover ">
                                DIRECT
                            </NavLink>
                            </li>
                            <li className='link'>
                                <NavLink to="/" exact className="hover ">
                                Jeunesse
                            </NavLink>
                            </li>
                            <li className='link'>
                                <AddAlertIcon />
                            </li>
                        </ul>
                    </div>
                    <button
                     onMouseEnter={(e) => setToogleProfil(true)}
                     onMouseLeave={(e) => setToogleProfil(false)}
                     >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" width="50" />
                    {toogleProfil && <div> Profil card dislay </div> }
                    </button>
                    
                </div>

            </div>

        </div>
    )
}

export default Navigation