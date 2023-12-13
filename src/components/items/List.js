import React from "react";

function List ({socialKind}){
    return (
        <li>
        <input type="checkbox" id={socialKind} /> 
        <label for={socialKind}>{socialKind}</label>
      </li>
    )
}
export default List