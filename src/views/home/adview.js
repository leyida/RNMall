'use strict';

import React from 'react-native'
var Styles = require('./style');

import Web from '../web'

var {
	    View,
	    Image,
	    TouchableHighlight,
    } = React;

export default class ADViews extends React.Component{
	constructor(props){
		super(props)
	}
	_loadWeb(title,loadurl){
		this.props.navigator.push({
			title: title,
			component: Web,
			passProps:{
				url: loadurl,
			}
		});
	}
	render() {
		var advViews = [];
		var advs = this.props.advs;
		for(var i = 0; i < advs.length; i++){
			var ad = advs[i];
			advViews.push(
				<TouchableHighlight onPress={()=>this._loadWeb(ad.title,ad.url)}>
					<View>
						<View style={{height:10,backgroundColor:'#eef0f3'}} />
						<Image style={[Styles.adv]} source={{uri:advs[i].image_path}} />
					</View>
				</TouchableHighlight>
			);
		};
		return (
			<View >
				{advViews}
			</View>
		);
	}

}

