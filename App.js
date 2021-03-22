import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import Routes from './src/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {LoaderView, LoaderProvider} from './src/screens';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    setTimeout(SplashScreen.hide, 2000);
  }, []);
  return (
    <>
      <LoaderProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex: 1}}>
            <Routes />
            <LoaderView />
          </SafeAreaView>
        </NavigationContainer>
      </LoaderProvider>
    </>
  );
};

export default App;
