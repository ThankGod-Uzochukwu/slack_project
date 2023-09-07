import { StatusBar } from 'expo-status-bar';
import teegee from './assets/teegee.png'
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import WebView from 'react-native-webview';
import { useState } from 'react';

export default function App() {
  const [showWebView, setShowWebView] = useState(false);
  const githubProfile = 'https://github.com/TeeGee-TechBro';

  const openGithub = () => {
    setShowWebView(true);
  };


//   return (
//     < style={styles.container}>
//       {/* <Text>ThankGod Uzochukwu</Text>
//        <Image source={teegee} style={styles.logo} resizeMode='contain' /> */}
//        <Button title="Open GitHub" onPress={openGithub} />
//       {showWebView && (
//         <WebView
//           source={{ uri: githubProfile }}
//         />
//       )}
//       <StatusBar style="auto" />
//     </>
//   );
// }

return (
  <>
 <SafeAreaView style={styles.container}>
 <Text style={styles.name}>ThankGod Uzochukwu</Text>
  <Image source={teegee} style={styles.logo} resizeMode='contain' />
  </SafeAreaView>

   <SafeAreaView style={{ flex: 1 }}>

    {showWebView ? (
      <WebView source={{ uri: 'https://github.com/TeeGee-TechBro' }} />
    ) : (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={openGithub}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Open GitHub</Text>
        </TouchableOpacity>
      </View>
    )}
  </SafeAreaView>
  
  </>
);
}





const styles = StyleSheet.create({
  logo:{
    width: 200,
    height: 200,
    borderRadius: 200/2
  },
  container:{
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 20,
  },
  name:{
    fontSize: 20,
    fontWeight: '700',
    padding: 10,
  },
  button:{
    backgroundColor: '#dcaca5',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 15,
    width: '85%',
    height: '35%',
    padding: 15,
    marginTop: -40
  }
});
