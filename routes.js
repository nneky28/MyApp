import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import store from './src/Redux/index';
import FlashMessage from 'react-native-flash-message';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs(true);
const MainApp = () => {

    useEffect(() => {
        // LogBox.ignoreAllLogs(true);
    }, [])

    return (
        <Provider store={store}>
            <App />
            <FlashMessage position="bottom" icon="auto" />

        </Provider>
    )
}

export default MainApp;