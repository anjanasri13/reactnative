import { Text, View, Image,SafeAreaView,Platform,Button,Alert,TouchableOpacity} from 'react-native';
import Check from './assets/Flipkart.png';
import { FcAndroidOs } from "react-icons/fc";
import { AntDesign } from '@expo/vector-icons';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';

const isAndroid = Platform.OS === "android" 

// console.log(Platform.OS)


{/* <FcAndroidOs /> */}

export default function App() {
 
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
  
  return (
   
    // <View style={styles.container}>

  <SafeAreaView style={{marginTop: isAndroid ? 80 : 0, flex: 1}}>
    
       {/*<AntDesign name="doubleright" size={24} color="black" style={{marginTop:20,paddingLeft:300,}}/>
      
    <View className="items-center justify-center bg-[#FFFFFF] ">
        <Image source={Check} style={{width: 200, height: 150,marginBottom:10}} />
        <Text className="font-bold text-red  text-[#ff0000] border-2 border-solid mb-10">Open up App.js to start working on your app!</Text>
        
    </View> 
     <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}/>
   <View style={{alignItems:'center', marginTop:10}}>
        <Text>Count: {count}</Text>
        <TouchableOpacity style={{alignItems:'center',backgroundColor:'#DDDDDD',padding: 10,marginTop:10}} onPress={onPress}>
        <Text>Press Here</Text>
        </TouchableOpacity>
    </View>*/}
  
   <View style={{alignItems:'center',justifyContent:'center',}}>
       <Image source={require("./assets/merry.gif")}/>
       <Image source={require("./assets/star.gif")}/>
    {/*<Image source={require("./assets/gif.gif")}/>*/}
    </View>


    <LottieView source={require('./assets/lottie.json')} autoPlay loop style={{height:50,width:50}}/>
    </SafeAreaView>
    );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
