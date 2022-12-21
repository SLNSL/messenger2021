import React, {useEffect} from "react";
import {InputText} from 'primereact/inputtext';
import axios from "axios";
import $ from "jquery";
import {useDispatch, useSelector} from "react-redux";

function ToFind_button(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        $('.to_find_button').click();
    })

    function getTable() {
        let to = localStorage.getItem("to")
        let from = localStorage.getItem("login")
        // console.log(messages)
        let httpHeaders = {
            Authorization: 'Bearer ' + localStorage.getItem("token"),
            ContentType: 'application/json',
            Accept: 'application/json'
        };
        axios.post('http://localhost:8080/points/getMessages', {to: to, from: from}, {headers: httpHeaders})
            .then(response => {
                if (response.status === 200) {
                    // console.log(response.data)
                    // console.log(from + to)
                    dispatch({type: "LOAD_MESSAGES", messages: response.data})
                }
            })




        axios.post('http://localhost:8080/points/get', {userID: localStorage.getItem("userID")}, {headers: httpHeaders})
            .then(response => {
                if (response.status === 200) {
                    dispatch({type: "LOAD_TABLE", data: response.data})
                }
            })
    }




    // SET_AUTO_UPDATE_ID
    function find(){
        dispatch({type: "UPDATE_TO", to: $('.p-inputtext')[0].value})
        getTable()
        setInterval(getTable, 1000)
        let auID = setInterval(getTable, 1000)

        dispatch({type:"SET_AUTO_UPDATE_ID", autoUpdateID: auID})

    }
    return (
        <div>
            <button
                className={"to_find_button"}
                style={{
                    float: "left",
                    marginLeft: "9px"
                }}
                onClick={find}>Найти</button>
        </div>
    );
}

export default ToFind_button;



