import React, {useEffect} from "react";
import {InputText} from 'primereact/inputtext';
import Submit_button from "./buttons/Submit_button";
import Messages from "./Messages";
import Type_field from "./Type_field";
import Logout_button from "./buttons/Logout_button";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";



function Messenger(props) {
    const dispatch = useDispatch();

    const to = props.to;
    const from = props.from;
    useEffect(()=>{

        if (to!=="") {
            // setInterval(getTable, 3000)
        }

    })

    return (
        <div>
            <div className={"messenger"}>
                <Messages></Messages>
            </div>
            <Type_field></Type_field>
            <Logout_button></Logout_button>
            <Submit_button to={props.to} from={props.from} message={props.message}></Submit_button>

        </div>
    );
}

export default Messenger;