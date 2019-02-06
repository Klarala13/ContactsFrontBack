import React from "react";

//Styleshits
import "../css/App.css";

class FileUploader extends React.Component {

 previewFile = () => {
    const preview = document.querySelector("img"); 
    const file = document.querySelector("input[type=file]").files[0]; 
    const reader = new FileReader();

    reader.onloadend = function() {
      preview.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file); 
    } else {
      preview.src = "";
    }
  }


  render() {
    
    
    return (
      <form>
        <input type="file" onChange= {this.previewFile} />
        <img src="" height="200" alt="Preview" />
      </form>
    );
  }
}

export default FileUploader;
