import React from "react";
import "./index.less"
interface IndexComProps {

}
class IndexCom extends React.Component<IndexComProps>{
  // constructor(props:IndexComProps){
  //   super(props);
  // }
  public render(){
    return (
      <div className="index_main">
        <div className="index_bg">
          <div className="index_mask"></div>
        </div>
        <div className="index_wrap">
          <div className="index_header">
            <div className="index_logo">
              <img src="https://www.grannyssecret.com/web-assets/img/design/grannys-logo-vertical.png" alt=""/>
            </div>
            <div className="index_menu">
              <span className="menu_icon"></span>
              <span className="menu_title">MENU</span>
            </div>
          </div>        
          <div className="index_content">
            <span className="bigTitle">Shall we</span>
            <span className="bigSubtitle">share the secret with you?</span>     
            <div className="svg_box">
              
            </div>       
          </div>
        </div>
      </div>
    )
  }
}
export default IndexCom