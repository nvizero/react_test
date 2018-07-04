import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


var StarsFrame = React.createClass({
	displayName: 'StarsFrame',        
	render:function() {
		
		var stars = [];

		for(var i = 0 ; i< this.props.numberOfStars ; i++){
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

		var props = this.props;	
		var selectedNBS = props.selectedNumbers.map(function(nb,idx){
			return (
				<span key={idx} onClick={props.unselectNumber.bind(null, nb)}>
					{nb}
				</span>
			);
		});

		return (
			<div id="answer-frame">
				<div className="well">					
					{selectedNBS}
				</div>
			</div>
		)
	}
});

var NumbersFrame = React.createClass({
	displayName: 'NumbersFrame',        	
	render:function() {

		var numbers = [] , class_Name ,
			selectNumber = this.props.selectNumber,
			selectedNumbers = this.props.selectedNumbers;
		 
		for(var i=1 ; i<=9 ; i++){
			class_Name = "number selected-" + (selectedNumbers.indexOf(i)>=0);
			numbers.push(
				<div className={class_Name} key={i} onClick={selectNumber.bind(null,i)}>
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
			numberOfStars : Math.floor(Math.random()*19)  ,
			selectedNumbers: [] 
		}
	},

	selectNumber: function(clickedNumber){
		if(this.state.selectedNumbers.indexOf(clickedNumber) < 0 ){
			this.setState(
				{  selectedNumbers: this.state.selectedNumbers.concat(clickedNumber) }
			);
		}
	},
	unselectNumber: function(clickedNumber){
		var selectedNumbers = this.state.selectedNumbers,
			indexOfNumber = selectedNumbers.indexOf(clickedNumber);

		selectedNumbers.splice(indexOfNumber ,1);
		this.setState({selectedNumbers: selectedNumbers });
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
									unselectNumber={this.unselectNumber}/>
				</div>
				<NumbersFrame  selectedNumbers={this.state.selectedNumbers} 
								selectNumber={this.selectNumber}/>
			</div>
		)
	}
})






ReactDOM.render(
  <Game />,
  document.getElementById('container')
);
