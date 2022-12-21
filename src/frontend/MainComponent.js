import Mess from "./Mess";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import React, {Component, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Index_page from "./Index_page"


function foo(){
    let httpHeaders = {
        Authorization: 'Bearer ' + localStorage.getItem("token"),
        ContentType: 'application/json',
        Accept: 'application/json'
    };
    axios.post('http://localhost:8080/users/checkUser', {token: localStorage.getItem("token"), login: localStorage.getItem("login")}, {headers: httpHeaders})
        .then(response => {
            if (response.status == 200) {
                return "true";
            }
        })
        .catch(function (error) {
            return "false";

        })
    return false;
}

function MainComponent() {

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);
    const user = useSelector(state => state.user)
    const password = useSelector(state => state.password)
    useEffect(()=>{



    })




    return (
        <div className="App">
            {login !== "" ? <Mess/> : <Index_page/>}
            {/*<Mess/>*/}
        </div>
    );
}

export default MainComponent;
