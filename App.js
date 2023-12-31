import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
const WEBVIEW = 'https://removebg-gjes.onrender.com/';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", height:"100%"}}>
        <WebView source={{uri: WEBVIEW}}>

        </WebView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
