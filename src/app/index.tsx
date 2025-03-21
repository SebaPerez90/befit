import React from 'react';
import { CustomText } from '../modules/core/components/CustomText';
import { ScreenView } from '../modules/core/components/ScreenView';

export default function index() {
  return (
    <ScreenView
      align='start'
      style={{ justifyContent: 'flex-end' }}>
      <CustomText type='title'>Hello World!</CustomText>
      <CustomText type='subtitle'>Hello World!</CustomText>
      <CustomText type='defaultSemiBold'>Hello World!</CustomText>
      <CustomText>Hello World!</CustomText>
      <CustomText type='link'>Hello World!</CustomText>
    </ScreenView>
  );
}
