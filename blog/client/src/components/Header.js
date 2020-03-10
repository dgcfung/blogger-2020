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

       
       
       
        
          <button type="button" class="button" onClick= {this.handleButtonClick}>
            ☰
          </button>
          <h1 className = "blogger-header">Blogger 2020</h1>
          {this.state.open && (
          <div class="dropdown" onClick={this.handleButtonClick}>
            <ul>
              <Link style={{ textDecoration: 'none' }} to="/"><li>About Blogger 2020</li></Link>
              <Link style={{ textDecoration: 'none' }} to="/profile"><li>Profile</li></Link>
              <Link style={{ textDecoration: 'none' }} to="/posts"><li>Posts</li></Link>
              {/* <Link style={{ textDecoration: 'none' }} to="/posts/user_id"><li>New Post</li></Link> */}
               {/* <li>About Us</li>
              <li>About Us</li>
              <li>Profile</li>
              <li>Posts</li>
              <li>New Post</li>
              <li>Feed</li> */}
            </ul>
            
          </div>
         
           )}
          

        </div> 
      </div>
    );

  }
}

export default Header