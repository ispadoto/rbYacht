var React, { Component } = require('react');

var { Footer, Contact, MonthPlan, Highlights, BlogLatest, Newsletter } = require('.');

class Sidebar extends Component {

	render(){
		return(
			<div id="sidebar">
				<div className="inner">

				<section id="search" className="alt">
					<form method="post" action="#">
						<input type="text" name="query" id="query" placeholder="Search" />
					</form>
				</section>

				<nav id="menu">
					<header className="major">
						<h2>Menu</h2>
					</header>
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">List of Plans</a></li>
						<li><a href="#">Price List</a></li>
						<li><a href="#">Order Form</a></li>
						<li><a href="#">Articles</a></li>
						<li><a href="#">Letters</a></li>
						<li><a href="#">Forum</a></li>
						<li><a href="#">F.A.Q.</a></li>
						<li><a href="#">Links</a></li>
						<li><a href="#">Shipyards</a></li>
						<li><a href="#">About Us</a></li>
					</ul>
				</nav>
				<Highlights />
				<Newsletter />
				<Contact />
				<Footer />
				</div>
			</div>
		)
	}
}
export default Sidebar
