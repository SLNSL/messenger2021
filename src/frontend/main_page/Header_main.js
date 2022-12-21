import React from "react";
import {InputText} from 'primereact/inputtext';
import $ from "jquery";
import {useDispatch} from "react-redux";
import ToFind_button from "./buttons/ToFind_button";
import StopUpdate_button from "./buttons/StopUpdate_button";

function Table_main(props) {
    const dispatch = useDispatch();

    function toChange(e) {
        // dispatch({type: "UPDATE_TO", to: e.target.value})
        // console.log($('.'))
    }

    return (
        <div className={"header_main"}>

            <h2 style={{float: "left"}}>С кем: </h2>
            <InputText className={"friend_name_text"} style={{
                float: "left"
            }}
                       onChange={toChange}/>


            <ToFind_button/>
            <StopUpdate_button/>
            <div style={{float: "right"}}>
                <h2 style={{
                    float: "right"
                }}>Пользователь: {localStorage.login}</h2>
            </div>


        </div>
    );
}

export default Table_main;