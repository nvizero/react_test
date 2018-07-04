import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


var Game = React.createClass({
	getInitialState: function(){
		return { counter: 0 }
	},
	handleClick:function(increment){
		this.setState({counter: this.state.counter+increment})
	},
	render:function() {
		return (
			<div id="game">
				<h2>Play Nine</h2>
			</div>
		)
	}
})






ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
