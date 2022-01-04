import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AppButton from './src/components/AppButton';
import DialogBox from './src/components/DialogBox';
import colors from './src/config/colors';

export default () => {
  const [addExpense, setAddExpense] = useState(false);
  const [addIncome, setAddIncome] = useState(false);
  const [income, setIncome] = useState(100);
  const [expense, setExpense] = useState(200);
  const [total, setTotal] = useState(income + expense);
  const [height] = useState(500);
  const [incomePercentage, setIncomePercentage] = useState(income / total);
  const [expensePercentage, setExpensePercentage] = useState(expense / total);
  setTimeout(() => {
    setIncome(100);
    setExpense(1500);
  }, 1000);

  useEffect(() => {
    const newTotal = income + expense;
    setTotal(newTotal);
    setIncomePercentage(income / newTotal);
    setExpensePercentage(expense / newTotal);
  }, [income, expense]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Add Income"
          color="green"
          onPress={() => setAddIncome(!addIncome)}
        />
        <AppButton
          title="Add Expense"
          color="primary"
          onPress={() => {
            console.log('heree');
            setAddExpense(true);
          }}
        />
      </View>
      {addExpense && (
        <DialogBox
          title="Add Expense"
          Description="Please add your new expenditure (numbers only)"
          ButtonLabel="ADD"
          visible={addExpense}
          setVisible={setAddExpense}
        />
      )}
      {addIncome && (
        <DialogBox
          title="Add Income"
          Description="Please add your new income (numbers only)"
          ButtonLabel="ADD"
          visible={addIncome}
          setVisible={setAddIncome}
        />
      )}
      <View style={{...styles.outerPartition, height: height}}>
        <View
          style={{
            ...styles.expensePartition,
            height: expensePercentage * height,
            borderTopLeftRadius: (expensePercentage * height) / 2,
            borderTopRightRadius: (expensePercentage * height) / 2,
          }}></View>
        <View
          style={{
            ...styles.incomePartition,
            height: incomePercentage * height,
            borderBottomLeftRadius: (incomePercentage * height) / 2,
            borderBottomRightRadius: (incomePercentage * height) / 2,
          }}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: 'white',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: 50,
  },
  incomeButton: {
    backgroundColor: colors.green,
  },
  outerPartition: {
    width: 100,
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 20,
  },
  expensePartition: {
    backgroundColor: 'red',
  },
  incomePartition: {
    backgroundColor: 'green',
  },
});
