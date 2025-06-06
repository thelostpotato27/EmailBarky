import {AsyncStorage, View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import { router } from 'expo-router';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const setup = () => {
  try {
    const value = await AsyncStorage.getItem('initial_setup');
    if (value !== null) {
      // We have data!!
      console.log(value);
      router.replace('/(tabs)');
    }
  } catch {
    return(
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}

const check_prev_setup = async () => {
  
};

