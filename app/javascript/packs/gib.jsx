import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

var Card = React.createClass({

	getInitialState: function(){
		return {};
	},

	componentDidMount: function(){
		var component = this;
		$.get("https://api.github.com/users/" + this.props.login ,function(data){			
			// component.setState(data.);			
			// console.log(data.avatar_url);
			// component.setState({ avatar_url : data.avatar_url })
			component.setState(data)

		});
	},

	render: function(){
		return (
			<div>
				<img src={this.state.avatar_url}  width="80px"/>
				<h3>{this.state.name}</h3>	
				<hr/>
			</div>
		);
	}
});


var Main = React.createClass({
	render: function(){
		<div >
			<Card login="petehunt" />
			<Card login="nvizero" />
		</div>
	}
});


ReactDOM.render(
  <Card />,
  document.getElementById('github_show')
);
