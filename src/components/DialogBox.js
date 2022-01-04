import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Dialog from 'react-native-dialog';

export default function DialogBox({
  title = 'title',
  ButtonLabel,
  Description,
  visible,
  setVisible,
}) {
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
      <Dialog.Title>{[title]}</Dialog.Title>
      <Dialog.Description>{Description}</Dialog.Description>
      <Dialog.Input label={'¢'} />
      <Dialog.Button label={ButtonLabel} bold onPress={handleCancel} />
    </Dialog.Container>
  );
}
