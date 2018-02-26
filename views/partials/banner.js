import React, {Component} from 'react'
import { SliderBanner } from '.'

class Banner extends Component {

	render(){
		return(
			<section id="banner">
				<div className="content">
					<header>
						<h1>Welcome to 
						B & G Yatch Design</h1>
						<p>Your next boat is here!</p>
					</header>
					<p>Roberto Barros is the founder of the office. He started a boat building career some forty years ago producing custom cruising and racing sail boats. In his search for building lighter and faster boats, he discovered that he had to brake away from the established concepts of that time. In 1964 he produced the plans for an ultra light displacement boat and built it in a very short time, with a minimum budget for the amazement of his contemporary yachtsmen. Once plans with those characteristics were difficult to be found he felt inducted to design himself and construct other sailboats of similar concept, all of them were sold to enthusiasts as soon as they were launched.</p>
	
					<ul className="actions">
						<li><a href="#" className="button big">Read More</a></li>
					</ul>
				</div>
				<SliderBanner />
			</section>
			)
	}
}

export default Banner