import React from 'react';
import { CustomText } from '../modules/core/components/CustomText';
import { ScreenView } from '../modules/core/components/ScreenView';
import Home from './home';

export default function index() {
  return (
    <ScreenView>
      <CustomText type='title'>Hello World!</CustomText>
      <Home />
    </ScreenView>
  );
}
