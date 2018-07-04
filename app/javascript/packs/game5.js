import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


var StarsFrame = React.createClass({
	displayName: 'StarsFrame',        
	render:function() {
		
		var stars = [];

		for(var i = 1 ; i< this.props.numberOfStars  ; i++){
			stars.push(
				<span key={i} className="glyphicon glyphicon-star"></span>
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

		var porps =this.props;
		
		var selectedNumbers = porps.selectedNumbers.map(function(i){
			return (
				<span onClick={props.unselectNumber.bind(null,i)} >
					{i}..
				</span>
			)
		});


		return (
			<div id="answer-frame">
				<div className="well">					
					{selectedNumbers}
				</div>
			</div>
		)
	}
});

var NumbersFrame = React.createClass({
	displayName: 'NumbersFrame',        	
	render:function() {

		var numbers = [] , class_Name ,
			clickNumber = this.props.clickNumber,
			selectNumber = this.props.selectNumber;
		 
		for(var i=1 ; i<=9 ; i++){
			class_Name = "number selected-" + (selectNumber.indexOf(i)>=0);
			numbers.push(
				<div className={class_Name} key={i} onClick={clickNumber.bind(null,i)}>
					{i}
				</div>
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
		return { 
			numberOfStars : Math.floor(Math.random()*9)+1  ,
			selectedNumbers: [] 
		}
	},
	unselectNumber: function(clickedNumber){
		var selectedNumbers = this.state.selectedNumbers,
			indexOfNumber   = selectedNumbers.indexOf(clickedNumber);

		selectedNumbers.splice(indexOfNumber , 1);	
		this.setState({selectedNumbers: selectedNumbers})
	},
	clickNumber: function(clickedNumber){
		if(this.state.selectedNumbers.indexOf(clickedNumber) < 0 ){
			this.setState(
				{  selectedNumbers: this.state.selectedNumbers.concat(clickedNumber) }
			);
		}
	},

	render:function() {
		return (
			<div id="game">
				<h2>Play Nine</h2>
				<hr	/>
				<div className="clearfix">
					<StarsFrame numberOfStars={this.state.numberOfStars}/>
					<ButtonFrame />
					<AnswerFrame 	selectedNumbers={this.state.selectedNumbers} 
									unselectNumber={this.unselectNumber}
									/>
				</div>
				<NumbersFrame  selectedNumbers={this.state.selectedNumbers} 
								clickNumber={this.clickNumber}/>
			</div>
		)
	}
})






ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
