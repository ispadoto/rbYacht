import React, {Component} from 'react'

class Newsletter extends Component { 

	render(){
		return(
				<section>
					<header className="major">
						<h2>Sign up to our newsletter</h2>
					</header>
					<form>
						<div className="row uniform">
							<div className="12u$">
								<input type="text" name="demo-name" id="demo-name" value="" placeholder="Name" />
							</div>
						</div>
						<div className="row uniform">
							<div className="12u$">
								<input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
							</div>			
							<div className="12u$">
								<ul className="actions">
									<li><input type="submit" value="Sign up" className="special" /></li>
								</ul>
							</div>
						</div>
					</form>
				</section>
			)
	}
}

export default Newsletter