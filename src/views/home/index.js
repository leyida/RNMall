/**
 * Created by leo on 16/5/6.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Styles = require('./style');

//var API = require('../../network/api');
//var Util = require('../../util/util');
//var Global = require('../../util/global');
import Loading from '../loading'
//var Web = require('../web');

//自定义组件
import Slider from './SlideBanner'
import ADViews from './adview'
import BqService from './bqservice'
//var BqService = require('./bqservice');
//var HotGoods = require('./hotgoods');

//下拉刷新
//var {
//	    RefresherListView,
//	    LoadingBarIndicator
//    } = require('react-native-refresher');

var {
	    Text,
	    View,
	    Image,
	    ScrollView,
	    ListView,
	    TouchableHighlight,
    } = React;

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			store_id: 8805,
			loaded:false,
			banners:[],
			services:[],
			hotgoods:[],
			advs:[],
		}
	}
	componentDidMount(){
		this.getStoreMunu();
	}
	getStoreMunu(){
		var store_id=this.state.store_id;
		var p9 = "app";
		var url ="https://api.bqmart.cn/stores/menu.json?store_id=8805&p9=app";
		fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					banners: responseData.result.banners,
					services: responseData.result.services,
					advs:responseData.result.advs,
					loaded:true,
				});
				this.getRecommendation();
			})
			.done();
	}
	getRecommendation(){
		var storeid = this.state.store_id;
		var url = "https://api.bqmart.cn/goods/relatedrecommend.json?store_id=8805&type=seckill&page=1&limit=40";
		fetch(url)
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData)
				this.setState({
					hotgoods:responseData.result
				});
			}).done();
	}
	renderContent() {
		if(!this.state.loaded){
			return (<Text style={Styles.hottitle}> LOADING </Text>);
		}
		return (
			<ScrollView style={[Styles.container]}>
				<Slider banners={this.state.banners} navigator={this.props.navigator}/>
				<BqService
					collumnNum={3}
					services = {this.state.services}/>
				<ADViews advs={this.state.advs} navigator={this.props.navigator}/>
				<View style={[Styles.row,Styles.center]}>
					<View style={[Styles.hotLine,Styles.flex1]}/>
					<Text style={Styles.hottitle}> 精品推荐 </Text>
					<View style={[Styles.hotLine,Styles.flex1]}/>
				</View>
				{/*<HotGoods
					collumnNum={2}
					navigator={this.props.navigator}
					hotgoods ={this.state.hotgoods}/>*/}
			</ScrollView>
		);
	}
	render(){
		if(!this.state.loaded){
			return <Loading loadingtext='正在加载首页...'/>
		}
		return this.renderContent();
	}
}