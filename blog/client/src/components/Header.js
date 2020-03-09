import React from 'react'
import { NavLink, Link } from 'react-router-dom'

class Header extends React.Component {
  container = React.createRef(); 
  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };

componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
}
componentWillUnmount() {
  document.removeEventListener("mousedown", this.handleClickOutside);
}

handleClickOutside = event => {
  if (this.container.current && !this.container.current.contains(event.target)) {
    this.setState({
      open: false,
    });
  }
};



  render() {
    return (
      <div className="App">
        <div className="container" ref= {this.container}>
        <h1>Blogger 2020</h1>
          <button type="button" class="button" onClick= {this.handleButtonClick}>
            ☰
          </button>
          {this.state.open && (
          <div class="dropdown" onClick={this.handleButtonClick}>
            <ul>
              <li>About Us</li>
              <li>Profile</li>
              <li>Posts</li>
              <li>New Post</li>
              <li>Feed</li>
            </ul>
          </div>
           )}
        </div>
       
      </div>
    );

  }
}

export default Header