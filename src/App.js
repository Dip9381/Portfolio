import React, { useState } from "react";
import './components/style.css'
import Head from './components/Head.jsx'
import Body from './components/Body.jsx'
function App() {
const [key,setkey]=useState(1);
function setcontent(value){
setkey(value);
}
  return (
    <>
    <Head getkey={setcontent}/>
    <Body val={key}/>
    </>
  );
}

export default App;
