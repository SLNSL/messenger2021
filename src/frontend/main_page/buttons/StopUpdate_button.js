import React from "react";
import {InputText} from 'primereact/inputtext';
import axios from "axios";
import $ from "jquery";
import {useDispatch, useSelector} from "react-redux";

function StopUpdate_button(props) {
    const dispatch = useDispatch();
    const auID = useSelector(state => state.autoUpdateID);

    function stop() {
        clearInterval(auID);
        console.log("AUTO UPDATE OFF!!!!!!!!!!!!!! " + auID)
    }

    return (
        <div>
            <button
                className={"to_find_button"}
                style={{
                    float: "left",
                    marginLeft: "9px"
                }}
                onClick={stop}>Прекратить автообновление
            </button>
        </div>
    );
}

export default StopUpdate_button;



