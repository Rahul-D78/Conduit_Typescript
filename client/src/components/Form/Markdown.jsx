import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import FileBase from "react-file-base64";
let Marked = require("marked");

function Markedown() {
  const [marked, setMarked] = useState("");
  // const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setMarked(event.target.value);
  }

  // function handleClick(event) {
  //   setHeading(name);

  //   event.preventDefault();
  // }

  return (
    <div
      style={{
        paddingTop: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant="h5">Create Your Post</Typography>
        <textarea
          style={{ width: "500px", height: "50px" }}
          placeholder="Title"
          type="text"
        />
        <FileBase />

        <textarea
          style={{ width: "500px", height: "200px", marginTop: "20px" }}
          onChange={handleChange}
          type="text"
          placeholder="Body"
          value={marked}
        />
        <button type="submit">Submit</button>
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: Marked(marked) }}
            style={{ backgroundColor: "grey", height: "150px", width: "150px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Markedown;
