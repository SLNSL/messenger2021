import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {render} from "react-dom";
import $ from "jquery";

function Messages(props) {

    const dispatch = useDispatch();


    // function getTable() {
    //     let to = localStorage.getItem("to")
    //     let from = localStorage.getItem("login")
    //     console.log(messages)
    //     let httpHeaders = {
    //         Authorization: 'Bearer ' + localStorage.getItem("token"),
    //         ContentType: 'application/json',
    //         Accept: 'application/json'
    //     };
    //     axios.post('http://localhost:8080/points/getMessages', {to: to, from: from}, {headers: httpHeaders})
    //         .then(response => {
    //             if (response.status === 200) {
    //                 // console.log(response.data)
    //                 // console.log(from + to)
    //                 dispatch({type: "LOAD_MESSAGES", data: response.data})
    //             }
    //         })
    // }
    //
    // getTable()
    // setInterval(getTable, 6000)


    const data = useSelector(state => state.messages);
    let messages = data.map(function (message) {
        return ((message.from.userName === localStorage.getItem("login")) && (message.to.userName === localStorage.getItem("to"))) ||
            ((message.to.userName === localStorage.getItem("login")) && (message.from.userName === localStorage.getItem("to"))) ?
            <div><h2>{message.from.userName}</h2> {message.message} <br/></div> :
            "";
    });


    return (
        <div className={"messages"}>
            {messages}
        </div>
    );
}

export default Messages;