import React from 'react';
import {StyleSheet, Text, View, Modal, ActivityIndicator} from 'react-native';
import {useLoader} from './LoaderContext';

const Loader = () => {
  const {isLoading} = useLoader();
  return (
    <Modal visible={isLoading} transparent animationType="fade">
      <View style={styles.container}>
        <ActivityIndicator color="skyblue" size="large" />
        <Text style={styles.text}>Please wait...</Text>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  text: {
    fontSize: 20,
    color: 'skyblue',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
export default Loader;
