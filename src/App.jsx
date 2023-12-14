import React, { useState } from "react";
import axios from "axios";
import {Upload} from 'antd'

const App = () => {
  const [file, setFile] = useState([]);
  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", "file");
    console.log(formData)
    try{
    const result =  await axios.post(`https://uload-server.vercel.app/upload`, formData)
    console.log(result)
    }catch(err){
      console.log(err);
    }
  };
  return (
    <div>
      <Upload
        type="file"
        onChange={(e) => {
          console.log(e);
          setFile(e.fileList[0].originFileObj);
        }}
      >upload</Upload>
      <button type="button" onClick={upload}>
        upload
      </button>
      <img src="https://nodtest1.s3.ap-southeast-2.amazonaws.com/Mexican.png" />
    </div>
  );
};

export default App;
