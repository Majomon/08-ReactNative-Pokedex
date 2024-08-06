import 'react-native-gesture-handler';

import React from 'react';
import {ThemeContextProvider} from './presentation/context/ThemeContext';
import {StackNavigator} from './presentation/navigator/StackNavigator';

export const PokedexApp = () => {
  return (
    <ThemeContextProvider>
      <StackNavigator />
    </ThemeContextProvider>
  );
};
