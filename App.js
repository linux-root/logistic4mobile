/**
 * @author Dinh Bao Khanh
 */
const IP = '192.168.1.188';
import React from 'react';
import {WebView} from 'react-native-webview';
const App: () => React$Node = () => {
  return ( <WebView source={{uri: `http://${IP}:8080`}} /> );
};
export default App;
