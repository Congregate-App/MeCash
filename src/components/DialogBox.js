import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";

export default function DialogBox({title ="title",ButtonLabel, Description}) {
  const [visible, setVisible] = useState(false);

  const showDialog = () => {
    setVisible(true);
  };
 
  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Show dialog" onPress={showDialog} />
      <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
        <Dialog.Title>{[title]}</Dialog.Title>
        <Dialog.Description>
          {Description}
        </Dialog.Description>
        <Dialog.Input label={"¢"}/>
        <Dialog.Button label={ButtonLabel} bold onPress={handleCancel} />
      </Dialog.Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});