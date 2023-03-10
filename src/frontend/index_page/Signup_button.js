
import React from "react";
import axios from "axios";


function Signup_button(props) {

    function signUp() {

        axios.post(`http://localhost:8080/users/register`, {userName: props.user, userPassword: props.password})

            .then(response => {
                if (response.status === 200) {
                    alert("Пользователь создан")
                }


            })
            .catch(function (error) {
                alert(error.response.data.message.toString())


            })
        // window.location.assign('http://localhost:3000/main/');
    }

    return (

        <button onClick={signUp} className="link_to_main">Зарегестрироваться</button>

    );
}

export default Signup_button;