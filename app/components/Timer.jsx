var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState() {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	componentDidUpdate(prevProps, prevState) {
		if (this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer)
					this.timer = undefined;
					break;
			}
		}
	},
	componentWillUnmount() {
		clearInterval(this.timer);
		this.timer = undefined;
	},
	startTimer() {
		this.timer = setInterval(() => {
			this.setState({
				count: this.state.count + 1
			});
		}, 1000);
	},
	handleSetTimer(seconds) {
		this.setState({
			count: seconds,
			timerStatus: 'started'
		});
	},
	handleStatusChange(newStatus) {
		this.setState({timerStatus: newStatus});
	},
  render() {
  	var {count, timerStatus} = this.state;

  	return (
	    <div>
	    	<h1 className="page-title">Timer</h1>
	    	<Clock totalSeconds={count}/>
  			<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
	    </div>
	  );
  }
});

module.exports = Timer;