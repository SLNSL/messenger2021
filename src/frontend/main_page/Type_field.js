import React from "react";
import {InputText} from 'primereact/inputtext';
import $ from "jquery";
import {useDispatch} from "react-redux";


function Type_field(props) {
    const dispatch = useDispatch();

    function changeMessage(e){
        dispatch({type: "UPDATE_MESSAGE", message: e.target.value})
    }

    return (
        <div>
        <InputText
            className={"type_field"}
        onChange={changeMessage}></InputText>
        </div>
    );
}

export default Type_field;