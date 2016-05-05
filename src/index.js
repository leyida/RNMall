/**
 * RNMall
 *
 */
import React, { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './views/IOS'
import store from './store'

const VERSION = '0.1.0'

/**
 * 触发一些默认的Actions
 *
 */
import { setPlatform, setVersion, setStore } from './store/actions'

export default function native (platform) {
  const RNMall = React.createClass({
    render () {
      store.dispatch(setPlatform(platform))
      store.dispatch(setVersion(VERSION))
      store.dispatch(setStore(store))

      return (
        <Provider store={store}>
          <App store={store}/>
        </Provider>
      )
    }
  })

  /**
   *
   */
  AppRegistry.registerComponent('RNMall', () => RNMall)
}
