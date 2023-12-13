import React from "react";
import List from "./items/List";

function ListSocial() {
  return (
    <ul>
      <List socialKind="whatsapp" />
      <List socialKind="twitter" />
      <List socialKind="youtube" />
      {/* <li>
        <input type="checkbox" id="facebook" /> 
        <label for="facebook">facebook</label>
      </li>
      <li>
        <input type="checkbox" id="twitter" />
        <label for='twitter'>twitter</label>
      </li>
      <li>
        <input type="checkbox" id="youtube" />
        <label for='youtube'>Youtube</label>
      </li> */}
    </ul>
  );
}
export default ListSocial;
