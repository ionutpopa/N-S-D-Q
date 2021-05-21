import React from 'react';
import {SafeAreaView} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';

import Main from './components/main-view/main-view';

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <Main />
      </SafeAreaView>
      {/* <Route exact path="/" component={Main} /> */}
    </NativeRouter>
  );
};

export default App;
