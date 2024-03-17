import React, { useContext } from "react";
import "./Sidebar.css"
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";


export default function Main(){

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
    
    return(
        <div className="main">
          <p>Let's Chat</p>
          <div className="nav">
            <img src={assets.profile} alt="" />
          </div>
          {!showResult 
            ? 
            <div className="main-container">
              <div className="greet">
                <p><span>Hello, I'm Hari</span></p>
                <p>How can I help you??</p>
              </div>
            </div>
            : <div className="result">
                <div className="result-title">
                  <img src={assets.userss} alt=""/>
                  <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                  {loading
                    ?<div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    
                     </div>
                     : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                  }
                </div>
              </div>
          }
          
          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt..." />
              <div>
                {input?<img onClick={() => onSent()} src={assets.send} alt=""/>:null}
              </div>
            </div>
          </div>
        </div>
    )
}