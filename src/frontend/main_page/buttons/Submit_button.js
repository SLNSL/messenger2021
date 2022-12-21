import React from "react";
import {InputText} from 'primereact/inputtext';
import axios from "axios";
import $ from "jquery";
import {useDispatch, useSelector} from "react-redux";

function Submit_button(props) {

    let from = props.from;
    let to = props.to;
    let message = props.message;
    const dispatch = useDispatch();

    function send(e){
        e.preventDefault()
        // alert(localStorage.getItem("token"))
        let httpHeaders = {
            Authorization: 'Bearer ' + localStorage.getItem("token"),
            ContentType: 'application/json',
            Accept: 'application/json'
        };
        axios.post(`http://localhost:8080/points/send`, {from: from, to: to, message: message}, {headers: httpHeaders})
            .then(response => {

                if (response.status === 200) {
                    console.log(response.data)
                }
            })
            .catch(function (error) {
                alert(32)
                // if (error.response.data.message.toString() === "Недостаточно прав.") {
                //     axios.post('http://localhost:8080/users/refreshToken', {refreshToken: localStorage.getItem("refreshToken")}, {headers: httpHeaders})
                //         .then(response => {
                //             if (response.status === 200) {
                //                 alert("Срок токена истёк. Токен был обновлён.")
                //                 localStorage.setItem("token", response.data.accessToken);
                //                 localStorage.setItem("refreshToken", response.data.refreshToken);
                //             } else {
                //                 alert(response.data)
                //             }
                //         })
                //         .catch(function (error) {
                //             alert(error.response.data.message.toString())
                //         })
                // } else {
                //     alert(error.response.data.message.toString())
                // }


            })
    }

    function sh(){
        console.log(from)
        console.log(to)
        console.log(message)
    }

    return (
        <div>
            <button
            className={"submit_button"}
            onClick={send}>Отправить</button>
        </div>
    );
}

export default Submit_button;



