import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

var Button = React.createClass({
	localHandleClick: function(){
		this.props.localHandleClick(this.props.increment);
	},
	render: function(){
		return (
			<button onClick={this.localHandleClick}>+{this.props.increment}</button>
		)
	}
});

var Result = React.createClass({
	render: function(){
		return (
			<div>{this.props.totlaCounter}</div>
		)
	}	
});

var Main = React.createClass({
	getInitialState: function(){
		return { counter: 0 }
	},
	handleClick:function(increment){
		this.setState({counter: this.state.counter+increment})
	},
	render:function() {
		return (
			<div>
				<Button localHandleClick={this.handleClick} increment={1} />
				<Button localHandleClick={this.handleClick} increment={8} />
				<Button localHandleClick={this.handleClick} increment={87} />
				<Button localHandleClick={this.handleClick} increment={101} />
				<Button localHandleClick={this.handleClick} increment={11} />
				<Result totlaCounter={this.state.counter} />
			</div>
		)
	}
})






ReactDOM.render(
  <Main />,
  document.getElementById('bbn')
);
