var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav  = () => {
  return (
      <div className="top-bar">
      	<div className="top-bar-left">
      		<ul className="menu">
      			<li className="menu-text">React Timer App</li>
      			<li><IndexLink activeClassName="active-link" to="/">Timer</IndexLink></li>
      			<li><IndexLink activeClassName="active-link" to="/countdown">Countdown</IndexLink></li>
      		</ul>
      	</div>
      	<div className="top-bar-right">
	      	<ul className="menu">
	      		<li className="menu-text">
	      			Created by <a href="https://github.com/perrycoke" target="_blank">Kerry Moran</a>
	      		</li>
	      	</ul>
      	</div>
      </div>
  );
};

module.exports = Nav;