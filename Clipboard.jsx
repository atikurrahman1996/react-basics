import React from "react";

function Clipboard() {
  const CopyText = () => {
    alert("Text Copied");
  };

  const OnCutText = () => {
    console.log("Text cut successfully");
  };

  const onPasteText = () => {
    //console.log("Text Paste Successfully");
    alert("Text Paste Successfully");
  };

  return (
    <div>
      <p onCopy={CopyText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit!
      </p>

      <h1 onCut={OnCutText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam
        iure!
      </h1>

      <input
        type="text"
        onPaste={onPasteText}
        placeholder="Put your text here"
      />
    </div>
  );
}

export default Clipboard;

//Oncopy, Oncut, Onpaste
