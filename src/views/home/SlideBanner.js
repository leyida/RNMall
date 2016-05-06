

var React = require('react-native');
var Swiper = require('react-native-swiper');
var Loading = require('../loading');
var Web = require('../web');
var Styles = require('./style');

var {
	    Image,
	    TouchableHighlight,
    } = React;

//参数的传递使用props
export default class Slider extends React.Component{
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
	render(){
		var thiz = this;
		return (
			<Swiper style={Styles.wrapper} showsButtons={false} autoplay={true} height={125} showsPagination={false}>
				{this.props.banners.map(function(banner,key){
					return (
						<TouchableHighlight key={key} onPress={()=>thiz._loadWeb(banner.title,banner.url)}>
							<Image style={[Styles.slide]} source={{uri: banner.image_path}}/>
						</TouchableHighlight>
					);
				})}
			</Swiper>
		);
	}
}