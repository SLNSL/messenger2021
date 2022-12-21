import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from "./frontend/MainComponent";
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider, useDispatch} from "react-redux";
import axios from "axios";


const defaultState = {
    user: "",
    password: "",
    x: null,
    y: "",
    r: null,
    userID: localStorage.getItem("userID"),
    login: localStorage.getItem("login"),
    data: [],
    to: "",
    message: "",
    messages: [],
    unCheckedMessages: [],
    countOfUserMessages: [],
    autoUpdateID: null
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "LOAD_TABLE":


            for (let i = 0; i < action.data.length; i++) {
                action.data[i].user = action.data[i].userName;
            }
            return {...state, data: action.data}
        case "SET_LOG_IN":
            return {...state, login: action.login}
        case "GET_LOG_IN":
            return state.login;
        // case "SAVE_POINT":
        //     let new_data = [{x: action.point.x,
        //         y: action.point.y,
        //         r: action.point.r,
        //         execTime: action.point.execTime,
        //         curTime: action.point.curTime,
        //         hit: action.point.hit,
        //     user: action.point.userName}];
        //     let full_data = state.data.concat(new_data)
        //     return {...state, data: full_data};
        case "UPDATE_USER":
            return {...state, user: action.user}
        case "UPDATE_PASSWORD":
            return {...state, password: action.password}
        case "SET_X":
            return {...state, x: action.x}
        case "SET_Y":
            return {...state, y: action.y}
        case "SET_R":
            return {...state, r: action.r}
        case "LOG_IN":
            localStorage.setItem("login", action.login);
            localStorage.setItem("userID", action.userID);
            if (action.login == null || action.login === "") {
                state.r = null;
            }
            return {...state, login: action.login, userID: action.userID};


        case "UPDATE_TO":
            console.log("TOTOTOTOTO")
            localStorage.setItem("to", action.to)
            return {...state, to: action.to}
        case "UPDATE_MESSAGE":
            return {...state, message: action.message}
        case "LOAD_MESSAGES":

            let new_data = action.messages;
            let full_data = [].concat(new_data)
            // console.log(full_data)

            let newCountOfUserMessages = [];

            let allUsers = [];
            for (let i = 0; i < full_data.length; i++) {

                // newCountOfUserMessages[full_data[i].from.userName] += 2;
                if (!allUsers.includes(full_data[i].from.userName)) allUsers.push(full_data[i].from.userName)
                newCountOfUserMessages[full_data[i].from.userName] = 0;

            }
            for (let i = 0; i < full_data.length; i++) {
                newCountOfUserMessages[full_data[i].from.userName] += 1
            }

            let ucm = state.unCheckedMessages;
            for (let i = 0; i < allUsers.length; i++) {
                if ((newCountOfUserMessages[allUsers[i]] !== state.countOfUserMessages[allUsers[i]]) && (allUsers[i].toString() !== localStorage.getItem("login")) && (state.countOfUserMessages[allUsers[i]] !== undefined)) {
                    ucm[allUsers[i]] = 1;
                    console.log(allUsers[i]);
                    console.log(newCountOfUserMessages[allUsers[i]] + " " + state.countOfUserMessages[allUsers[i]] + " " + allUsers[i])
                }
            }

            //unchecking


            let to = localStorage.getItem("to")
            ucm[to] = 0;


            return {...state, unCheckedMessages: ucm, messages: full_data, countOfUserMessages: newCountOfUserMessages}
        case "SET_AUTO_UPDATE_ID":
            return {...state, autoUpdateID: action.autoUpdateID}
        default:
            return state
    }
}

const store = createStore(reducer, defaultState)

function getTable() {
    let to = localStorage.getItem("to")
    let from = localStorage.getItem("login")
    console.log(to)
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
                // dispatch({type: "LOAD_MESSAGES", data: response.data})
                defaultState.messages = response.data;
                reducer(defaultState, {type: "LOAD_MESSAGES", data: response.data})
            }
        })
}

// getTable()
// setInterval(getTable, 6000)
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <MainComponent/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
