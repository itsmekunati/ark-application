import React, { Component } from "react";

export default class AppFooter extends Component{

render() {
    return(
        <div className="fixed-bottom" style ={{backgroundColor: '#758283', display: 'flex',  justifyContent:'center', alignItems:'center',height: '5vh'}}>
           <nav class="navbar navbar-expand-lg navbar-light bg-light"> </nav>
           <span style ={{color:'white',  textAlignVertical: "center"}}>Abhishek @ 2023</span>
        </div>
    )
}
}