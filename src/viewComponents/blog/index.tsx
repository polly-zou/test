import React from "react";
import Header from "../../commComponents/header"
import SVGCom from "../../commComponents/animation/svg"
import "./index.less"
interface BlogComProps {

}
class BlogCom extends React.Component<BlogComProps>{
  // constructor(props:BlogComProps){
  //   super(props);
  // }
  public render(){
    return (
      <div className="blog_main">
        <Header name="polly"></Header>
        <div className="blog_content top_padding">
          <SVGCom />
        </div>
      </div>
    )
  }
}
export default BlogCom