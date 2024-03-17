import React, { useContext, useState } from "react";
import "./Sidebar.css";
import {assets} from "../../assets/assets";
import { Context } from "../../context/Context";



export default function Sidebar(){

    const [extended , setExtended] = useState(false)
   

    return (
              
        <div className="sidebar">
          <div className="top">
            <img  onClick ={() => setExtended(prev => !prev)} className="menu" src={assets.nav} alt="" />
            <div className="new-chat">
              <img src={assets.plus} alt="" />
              {extended? <p>New chat</p>: null}
            </div>
            {extended
              ?
              <div className="recent">
                <p className="recent-title">..Recent..</p>
                <div className="recent-entry">
                  <img src={assets.compass} alt=""/>
                  <p>what is frontend?....</p>
                </div>
            
              </div> : null }
          </div>
          <div className="bottom">
            <div className="bottom-item recent-entry">
              <img src={assets.help}  alt=""/>
              {extended? <p>help</p> : null}
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.activity}  alt=""/>
              {extended? <p>activity</p> : null}
            </div>
            <div className="bottom-item recent-entry">
              <img src={assets.settings}  alt=""/>
              {extended? <p>settings</p> : null}
            </div>
          </div>
        </div>
    )
}