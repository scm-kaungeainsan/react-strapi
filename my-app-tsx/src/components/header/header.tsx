import React, { Component } from "react";
// import { useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useNavigate, createHistory, createMemorySource  } from "@reach/router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCogs, faChild, faFolderOpen, faComments, faBlog, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Grid, TextField, Paper, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import './header.css';

function Header() {
    // const source = createMemorySource("/keyboard-select");
    // const history = createHistory(source);
    // const navigate = history.navigate;
    const navigate = useNavigate();
    return (
        <div className="header-container">
            <div className="logo"><
                h1 className="header-logo" onClick={() => navigate("/home")}>
                <span className="logo-k">K</span><span>aungEain</span></h1></div>

            <div className="menu">
                <div data-nav="list">
                    <ul className="anchor_nav">
                        <li>
                            <div className="list_inner">
                                <a className="">
                                    <button onClick={() => navigate("/home")}><FontAwesomeIcon icon={faHome} /> Home</button>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="list_inner">
                                <a className="">
                                    <button onClick={() => navigate("/about")}><FontAwesomeIcon icon={faChild} /> UserList</button></a>
                            </div>
                        </li>
                        <li>
                            <div className="list_inner">
                                <a className="">
                                    <button onClick={() => navigate("/service")}>
                                        <FontAwesomeIcon icon={faCogs} /> Service</button></a>
                            </div>
                        </li>
                        <li>
                            <div className="list_inner"><a className="">
                                <button onClick={() => navigate("/portfolio")}>
                                    <FontAwesomeIcon icon={faFolderOpen} /> Portfolio</button></a></div>
                        </li>
                        <li>
                            <div className="list_inner"><a className="">
                                <button onClick={() => navigate("/testimonial")}>
                                    <FontAwesomeIcon icon={faComments} /> Testimonial</button></a></div>
                        </li>
                        <li>
                            <div className="list_inner"><a className="">
                                <button onClick={() => navigate("/blog")}>
                                    <FontAwesomeIcon icon={faBlog} /> Blog</button></a></div>
                        </li>
                        <li>
                            <div className="list_inner"><a className="active">
                                <button onClick={() => navigate("/contact")}>
                                    <FontAwesomeIcon icon={faAddressCard} /> Contact</button></a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;
