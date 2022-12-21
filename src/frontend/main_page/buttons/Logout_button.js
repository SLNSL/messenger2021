import React from "react";
import {InputText} from 'primereact/inputtext';
import axios from "axios";
import $ from "jquery";
import {useDispatch, useSelector} from "react-redux";

function Logout_button(props) {
    const dispatch = useDispatch();
    function logout(){
        localStorage.setItem("token", null);
        localStorage.setItem("refreshToken", null);
        dispatch({type: "LOG_IN", login: ""})
    }
    return (
        <div>
            <button
                className={"submit_button"}
                onClick={logout}>Выйти</button>
        </div>
    );
}

export default Logout_button;



