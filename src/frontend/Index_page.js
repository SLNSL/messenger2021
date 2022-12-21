import './Main.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import $ from 'jquery';
import {Password} from 'primereact/password';
import {InputText} from 'primereact/inputtext';
import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';    //theme
import 'primereact/resources/primereact.min.css';                   //core css
import 'primeicons/primeicons.css';
import axios from "axios";
import Auth from "./index_page/Auth"
import Signin_button from "./index_page/Signin_button"
import Signup_button from "./index_page/Signup_button"



function Index_page() {

    const DELAY = 12000;
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const password = useSelector(state => state.password);


    useEffect(() => {
        setDateTime();
        setInterval(setDateTime, DELAY);
    })

    function setDateTime() {
        let date = new Date();

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        day = (day < 10) ? '0' + day : day;

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;
        $('.data').html(day + "." + month + "." + year)
        $('.time').html(hours + ":" + minutes + ":" + seconds)
    }


    return (

        <div>

            {/*<Header_index/>*/}

            {/*<Date_index/>*/}
            <div className="auth">
                <Auth user={user} password={password} dispatch={dispatch}/>


                    <Signin_button user={user} password={password} dispatch={dispatch}/>

                    <Signup_button user={user} password={password} dispatch={dispatch}/>
            </div>
        </div>
    );
}

export default Index_page;
