var React, {Component} = require('react')

class Header extends Component {
  render() {
    return
		(
			  <header id="header">
	        <a href="/" className="logo"><img className="image-logo" src="/images/logo.png"/></a>
	        <ul className="icons">
	          <li>
	            <a href="#" className="icon fa-twitter">
	              <span className="label">Twitter</span>
	            </a>
	          </li>
	          <li>
	            <a href="#" className="icon fa-facebook">
	              <span className="label">Facebook</span>
	            </a>
	          </li>
	          <li>
	            <a href="#" className="icon fa-snapchat-ghost">
	              <span className="label">Snapchat</span>
	            </a>
	          </li>
	          <li>
	            <a href="#" className="icon fa-instagram">
	              <span className="label">Instagram</span>
	            </a>
	          </li>
	          <li>
	            <a href="#" className="icon fa-medium">
	              <span className="label">Medium</span>
	            </a>
	          </li>
	        </ul>
	      </header>
		);
  };
};

export default Header
