
import React from "react";
import axios from "axios";


function Signin_button(props) {

    function logIn() {

        axios.post(`http://localhost:8080/users/auth`, {userName: props.user, userPassword: props.password})

            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem("token", response.data.accessToken);
                    localStorage.setItem("refreshToken", response.data.refreshToken);
                    props.dispatch({type: "LOG_IN", login: response.data.userName, userID: response.data.userID})
                }


            })
            .catch(function (error) {
                alert(error)


            })
        // window.location.assign('http://localhost:3000/main/');
    }

    return (

        <button onClick={logIn} className="link_to_main">Войти</button>

    );
}

export default Signin_button;