import React ,{useState} from "react";
import { View,Text, TouchableOpacity, StyleSheet } from "react-native";


import AppButton from "./src/components/AppButton";
import DialogBox from "./src/components/DialogBox";
import colors from "./src/config/colors";


// const ExpenseDialogBox = () => {
//   if (disabled){
//   return
//     <DialogBox
//   title = "Add Expense"
//   Description = "Please add your new expenditure (numbers only)"
//   ButtonLabel = "ADD"/>
//   } return null;

  
// };

export default () => {
  const [disabled, setDisabled] = useState(false);

  return (
<View style={styles.container}>
  <AppButton
  title="Add Income"
  color= "green"
  />
  <AppButton
  title="Add Expense"
  color= "primary"
   onPress={() => {
              setDisabled(true);
              console.log("expense added", disabled)
            }}
  />
  { disabled ? <DialogBox
  title = "Add Expense"
  Description = "Please add your new expenditure (numbers only)"
  ButtonLabel = "ADD"/>: null }
</View>
  );}

  const styles = StyleSheet.create({
    container:{
      //flex: 1,
      paddingTop: 100,
      flexDirection:'row',
      justifyContent: 'space-evenly'
    },
    incomeButton:{
      backgroundColor: colors.green,
    },
  });
