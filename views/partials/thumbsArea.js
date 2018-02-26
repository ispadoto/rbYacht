import React, {Component} from 'react'
import { Article } from '.'

class ThumbsArea extends Component {

	render(){
		return(
			<section>
				<header className="major">
					<h2>Our Plans</h2>
				</header>
				<Article />
				<ul className="actions">
						<li><a href="#" className="button">See all plans</a></li>
				</ul>
			</section>
			)
	}
}

export default ThumbsArea