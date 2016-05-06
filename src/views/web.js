/**
 *
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 18:32:08
 * @version $Id$
 */
'use strict';
var React = require('react-native');
var {
	    StyleSheet,
	    View,
	    WebView,
    } = React;
export default class Web extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		var webView = null;
		if(this.props.url){
			webView = <WebView url={this.props.url}/>
		}
		return(
			<View style={{flex:1}}>
				{webView}
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom:68,
	},
});