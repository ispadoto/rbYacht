import React, {Component} from 'react'
import { Banner, ThumbsArea, Sidebar, Header } from '.'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

class Root extends Component {
	render(){
		return(
			<div id="wrapper">
				<div id="main">
					<div className="inner">
						<Header />
						<Banner />
						<ThumbsArea />
					</div>
				</div>
			<Sidebar />
			</div>
		)
	}
}

export default Root
