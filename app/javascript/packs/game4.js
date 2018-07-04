import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


var StarsFrame = React.createClass({
	displayName: 'StarsFrame',        
	render:function() {
		var numberOfStars = Math.floor(Math.random()*9) ;
		var stars = [];

		for(var i = 0 ; i<= numberOfStars ; i++){
			stars.push(
				<span className="glyphicon glyphicon-star"></span>
			);
		}

		return (
			<div id="stars-frame">
				<div className="well">
					{stars}					
				</div>	
			</div>
		)
	}
});

var AnswerFrame = React.createClass({
	displayName: 'AnswerFrame',        
	render:function() {
		return (
			<div id="answer-frame">
				<div className="well">
					<span>5</span>
					{this.props.selectedNumbers}
				</div>
			</div>
		)
	}
});

var NumbersFrame = React.createClass({
	displayName: 'NumbersFrame',        	
	render:function() {

		var numbers = [] , class_Name ,selectedNumbers = this.props.selectedNumbers;
		 
		for(var i=1 ; i<=9 ; i++){
			class_Name = "number selected-" + (selectedNumbers.indexOf(i)>=0);
			numbers.push(
				<div className={class_Name}>{i}</div>
			)
		}

		return (
			<div id="numbers-frame">
				<div className="well ">
					{numbers}
				</div>
			</div>
		)
	}
});

var ButtonFrame = React.createClass({
	displayName: 'ButtonFrame',        		
	render:function() {
		return (
			<div id="button-frame">
				<button className="btn btn-primary btn-lg">=</button>
			</div>
		)
	}
})


var Game = React.createClass({
	displayName: 'Game',
	getInitialState: function(){
		return { selectedNumbers: [1 ,8] }
	},
	render:function() {
		return (
			<div id="game">
				<h2>Play Nine</h2>
				<hr	/>
				<div className="clearfix">
					<StarsFrame />
					<ButtonFrame />
					<AnswerFrame selectedNumbers={this.state.selectedNumbers} />
				</div>
				<NumbersFrame  selectedNumbers={this.state.selectedNumbers} />
			</div>
		)
	}
})






ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
