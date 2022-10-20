import { ActivityIndicator, SafeAreaView, StatusBar, View } from 'react-native';
import React, { useEffect } from 'react';
import  {NavigationContainer}  from '@react-navigation/native';
import  Routes  from './src/routes';
import { AuthProvider } from './src/context/auth';
import { Home } from './src/pages/home';
import { Login } from './src/pages/login';
import { useState } from 'react';
import { colors } from 'react-native-elements';
// import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';





 export default function App() {
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged(_user => {
//       if (initializing) {
//         setInitializing(false);
//       }
//       setUser(_user);
//     });

//     return unsubscribe;
//   }, [initializing]);

//   if (initializing) {
//     return (
//       <View>
//         <ActivityIndicator color={colors.primary} />
//       </View>
//     );
//   }




  return (
    
     <NavigationContainer>
       <StatusBar backgroundColor='#000' barStyle="light-content"/>
       <Routes/>
       {/* <SafeAreaView style={{flex: 1}}>
      {user ? <Home navigation={undefined} /> : <Login navigation={undefined} />}
    </SafeAreaView> */}
    </NavigationContainer>
    
      
  );
}


