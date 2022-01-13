/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../../../src/components/AppButton';
import DialogBox from '../../../src/components/DialogBox';
import colors from '../../../src/config/colors';
import {getExpensesAndIncome} from '../../utils/apiConnect';
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

const findSum = arr => {
  const response = arr.reduce((a, b) => a + b, 0);
  return response;
};

const HomeScreen = () => {
  const [addExpense, setAddExpense] = useState(false);
  const [addIncome, setAddIncome] = useState(false);
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [total, setTotal] = useState(findSum(income) + findSum(expense));
  const [height] = useState(500);
  const [incomePercentage, setIncomePercentage] = useState(
    findSum(income) / total,
  );
  const [expensePercentage, setExpensePercentage] = useState(
    findSum(expense) / total,
  );
  useEffect(() => {
    const getExpenses = async () => {
      const expensesIncome = await getExpensesAndIncome();
      expensesIncome?.Expenses && setExpense(expensesIncome?.Expenses);
      expensesIncome?.Income && setIncome(expensesIncome?.Income);
    };
    getExpenses();
  }, []);

  useEffect(() => {
    const newTotal = findSum(income) + findSum(expense);
    setTotal(newTotal);
    setIncomePercentage(findSum(income) / newTotal);
    setExpensePercentage(findSum(expense) / newTotal);
    setTotalExpense(findSum(expense));
    setTotalIncome(findSum(income));
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
          setExpenses={setExpense}
          expenses={expense}
          income={income}
        />
      )}
      {addIncome && (
        <DialogBox
          title="Add Income"
          Description="Please add your new income (numbers only)"
          ButtonLabel="ADD"
          visible={addIncome}
          setVisible={setAddIncome}
          setIncome={setIncome}
          expenses={expense}
          income={income}
        />
      )}
      <View style={{...styles.outerPartition, height: height}}>
        <Text style={styles.text}>GHC {totalExpense}</Text>
        <View
          style={{
            ...styles.expensePartition,
            height: expensePercentage * height || 250,
            // borderTopLeftRadius: (expensePercentage * height) / 10 || 50,
            borderTopLeftRadius: 10,
            // borderTopRightRadius: (expensePercentage * height) / 10 || 50,
            borderTopRightRadius: 10,
          }}>
          <FontAwesomeIcons size={36} name="arrow-circle-down" />
        </View>
        <View
          style={{
            ...styles.incomePartition,
            height: incomePercentage * height || 250,
            // borderBottomLeftRadius: (incomePercentage * height) / 10 || 50,
            borderBottomLeftRadius: 10,
            // borderBottomRightRadius: (incomePercentage * height) / 10 || 50,
            borderBottomRightRadius: 10,
          }}>
          <FeatherIcons size={36} name="arrow-up-circle" />
        </View>
        <Text style={styles.text}>GHC {totalIncome}</Text>
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
    marginBottom: 30,
  },
  incomeButton: {
    backgroundColor: colors.green,
  },
  outerPartition: {
    width: 100,
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 10,
  },
  expensePartition: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  incomePartition: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {textAlign: 'center', fontWeight: '800', fontSize: 18, color: 'black'},
});

export default HomeScreen;
