import React, {Component} from 'react'

class MonthPlan extends Component { 

	render(){
		return(
				<section>
					<header className="major">
						<h2>Stock Plan of the month</h2>
					</header>
					<div className="mini-posts">
						<article>
							<a href="#" className="image"><img src="/images/pic07.jpg" alt="" /></a>
							<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
						</article>
					</div>
					<ul className="actions">
						<li><a href="#" className="button">More</a></li>
					</ul>
				</section>
			)
	}
}

export default MonthPlan