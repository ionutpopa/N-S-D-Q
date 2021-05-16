import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Main = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Questions <Text style={styles.smallText}>and</Text> Answers
            </Text>
          </View>
          <View style={styles.smallContainer}>
            <Text style={styles.smallText}>
              On this platform you can ask <Text>anything</Text> and get
              responses without being <Text>ashamed </Text>
              of the question because anything it's <Text>anonymized! </Text>
              Enjoy!
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    fontFamily: 'Roboto',
    marginTop: 15,
    marginHorizontal: 15,
    display: 'flex',
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#239eee35',
    borderRadius: 10,
    flex: 1,
  },
  title: {
    width: 300,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  smallContainer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 20,
  },
  smallText: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
  },
});

export default Main;
