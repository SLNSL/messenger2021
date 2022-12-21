import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {ListBox} from "primereact/listbox"
import {SlideMenu} from "primereact/slidemenu"
import Table_main from "./main_page/Table_main";
import Header_main from "./main_page/Header_main";
import './Main.css';
import Messenger from "./main_page/Messenger";
import axios from "axios";


function Main_page(props) {
    useEffect(()=>{

        let httpHeaders = {
            Authorization: 'Bearer ' + localStorage.getItem("token"),
            ContentType: 'application/json',
            Accept: 'application/json'
        };
        axios.post('http://localhost:8080/points/get', {userID: userID}, {headers: httpHeaders})
            .then(response => {
                if (response.status === 200) {
                    dispatch({type: "LOAD_TABLE", data: response.data})
                }
            })
    })
    const dispatch = useDispatch();
    const userID = useSelector(state => state.userID);
    const login = useSelector(state => state.login);

    const to = useSelector(state => state.to);
    const message = useSelector(state => state.message);
    return (
        <div className="container">

            <Table_main/>
            <div className={"right_elements"}>
                <Header_main/>
                <Messenger from={login} to={to} message={message}/>
            </div>


        </div>


    );

}

export default Main_page;