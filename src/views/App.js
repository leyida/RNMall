import React, {
	View,
	Platform,
	Alert
} from 'react-native'
import IOSApp from './IOS'
import AndroidApp from './Android'

//import { original, community, dribbble, cnodejs } from '../route'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../store/actions'
import codePush from "react-native-code-push";

class App extends React.Component {
	constructor(args) {
		super(args)
	}
	componentWillMount() {
		codePush.sync();
		codePush.checkForUpdate()
			.then((update) => {
				if (!update) {
					Alert("The app is up to date!");
				} else {
					Alert("An update is available! Should we download it?")
				}
			});
	}
	render(){
		if(Platform.OS === 'ios'){
			return (
				<IOSApp {...this.props}/>
			)
		}
		return (
			<AndroidApp {...this.props}/>
		)
	}
}

const stateToProps = (state) => ({...state})
const dispatchToProps = (dispatch) => bindActionCreators({...Actions}, dispatch)

export default connect(stateToProps, dispatchToProps)(App)