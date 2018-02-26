import React, {Component} from 'react'

class Contact extends Component { 

	render(){
		return(
				<section>
					<header className="major">
						<h2>Get in touch</h2>
					</header>
					<p>We are always available to answer your questions, we would be happy to receive a message or a phone call.</p>
					<p>Feel free to contact us.</p>
					<ul className="contact">
						<li className="fa-envelope-o"><a href="#">info@yachtdesign.com.au</a></li>
						<li className="fa-phone">+61 0 8 9317.2560</li>
						<li className="fa-home">Perth<br />
						Western Australia</li>
					</ul>
				</section>
			)
	}
}

export default Contact