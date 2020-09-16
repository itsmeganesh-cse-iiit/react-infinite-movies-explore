import React from "react";
import './Header.css'

class Header extends React.Component {
    render() {
        const {title,bgColor}=this.props
      return (
      <div className="app-header" style={{backgroundColor:bgColor}}><label className="header-name">{title}</label></div>
      );
    }
  }
  
  Header.defaultProps={
      bgColor:"#242424"
  }
  export default Header;