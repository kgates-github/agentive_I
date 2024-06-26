import React, { useState, useEffect } from 'react';
import '../App.css';
import '../Assistant.css';

function DialogPanelUser(props) {
  
  useEffect(() => {   
    
  }, []);

  return (
    <div style={{marginBottom:"20px", }}>
      <div style={{
        display:"flex",
        flexDirection:"row",
        marginBottom:"0px",
      }}>
        <div style={{width:"38px",}}>
          <span 
            className="material-icons" 
            style={{
              fontSize: "24px",
              fontWeight: "500", 
              color: "#333", 
            }}>
            account_circle
          </span>
        </div>
        <div style={{
          fontFamily:"Open Sans", 
          fontWeight:"600", 
          flex:1, 
          paddingTop:"2px",
        }}>
          You
        </div>
      </div>
      <div style={{
        display:"flex",
        flexDirection:"row",
      }}>
        <div style={{width:"38px"}}></div>
        <div style={{fontFamily:"Source Sans Pro", flex:1, color:"#444", paddingRight:"20px"}}>
          {props.message ? props.message : null} 
        </div>
      </div>
    </div>
  );
}

export default DialogPanelUser;

{/*
<div style={{
  display:"flex",
  flexDirection:"row",
  marginBottom:"4px",
}}>
  <div style={{width:"38px",}}>
    <span 
      className="material-icons-outlined" 
      style={{
        fontSize: "24px",
        fontWeight: "500", 
        color: "#333", 
      }}>
      smart_toy
    </span>
  </div>
  <div style={{
    fontFamily:"Open Sans", 
    fontWeight:"600", 
    flex:1, 
    paddingTop:"2px",
    }}>Assistant</div>
  </div>

  <div style={{
    display:"flex",
    flexDirection:"row",
  }}>
    <div style={{width:"38px"}}></div>
    <div style={{fontFamily:"Source Sans Pro", flex:1, color:"#444"}}>
      {message.length > 0 ? message : null} 
    </div>
</div>
*/}