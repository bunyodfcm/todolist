import React from "react";
import AddIcon from "../../assets/companent-icon/Add-icon";
import List from "../list/List";
import "./Main.scss";
import Saidbar from "./sidebar/Sidebar";
const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-wrapper">
          <div className="main-header" id="main-header">
            <div className="main-logo">todo</div>
            <AddIcon className='add-icon'/>
          </div>
          <div className="main-body">
            <div className="main-sidebar">
                <Saidbar/>
            </div>
            <div className="main-content">
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/> 
                <List/>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
