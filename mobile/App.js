import React from 'react';
import './src/routes';
import { YellowBox } from 'react-native';


import Routes from './src/routes';

export default function App() {

    YellowBox.ignoreWarnings(['Setting a timer']);

  return (
    <Routes/>
  );
}
