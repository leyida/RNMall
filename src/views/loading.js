/**
 * Created by leo on 16/5/6.
 */
/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 18:09:57
 * @version $Id$
 */
'use strict';
var React = require('react-native');

var {
	    StyleSheet,
	    View,
	    Text,
    } = React;

export default class loading extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	render(){
		return (
			<View style={[styles.container]}>
				<Text>{this.props.loadingtext}</Text>
			</View>
		)
	}
}
var Loading = React.createClass({
	getInitialState: function() {
		return {
		};
	},
	
	componentDidMount: function() {
	},
	
	render: function() {
		return (
			<View style={[styles.container]}>
				<Text>{this.props.loadingtext}</Text>
			</View>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
