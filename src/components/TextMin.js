import React from "react";

function TextMin() {
  const client = "programmer";
  return (
    <p>
      <span className={`${(client === "designer" ? "colory" : "")}`}>Graphic</span>{" "}
      ipsum <span className={`${client==="programmer"?"colory":""}`}>web design</span> amet consectetur adipisicing elit. Voluptatibus
      facere aperiam iste mollitia doloribus ad, quod odit natus amet sapiente,
      laudantium libero molestiae doloremque cumque neque nihil sed eveniet
      perferendis.
    </p>
  );
}
export default TextMin;
