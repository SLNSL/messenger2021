import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function Table_main() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.data);
    const to = useSelector(state => state.to);
    const unCheckedMessages = useSelector(state => state.unCheckedMessages);


    let res = data.map(function (data) {
        // return data.userName == to ?
        //     <tr>
        //         <td className={"coord_col"} style={{backgroundColor: "red"}}>{data.userName}</td>
        //     </tr> :
        //     <tr>
        //         <td className={"coord_col"}>{data.userName}</td>
        //     </tr>

        return unCheckedMessages[data.userName] === 1 ?
            <tr>
                <td className={"coord_col"} style={{backgroundColor: "red"}}>{data.userName}</td>
            </tr> :
            <tr>
                <td className={"coord_col"}>{data.userName}</td>
            </tr>

    });

    useEffect(() => {
        if (localStorage.getItem("login") === "") {
            localStorage.setItem("token", null);
            localStorage.setItem("refreshToken", null);
            dispatch({type: "LOG_IN", login: ""})
        }
    });


    return (
        <div>
            <div className="table_class">
                <table>
                    <thead>
                    <tr>
                        <th className={"coord_col"}>Имя</th>
                    </tr>
                    </thead>
                    <tbody>
                    {res}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Table_main;