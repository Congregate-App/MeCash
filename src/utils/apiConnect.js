import firestore from '@react-native-firebase/firestore';

export const getExpensesAndIncome = async () => {
  try {
    const test = await firestore()
      .collection('MeCash_Demo')
      .doc('oIWgR9o2iVBZrPf84q47')
      .get();

    return test._data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getExpense = async () => {
  const foundExpense = await firestore()
    .collection('MeCash_Demo')
    .doc('oIWgR9o2iVBZrPf84q47')
    .get();

  return foundExpense._data;
};

export const saveExpenseForUser = async expense => {
  try {
    const readExpense = await getExpense();
    const savedExpense = await firestore()
      .collection('MeCash_Demo')
      .doc('oIWgR9o2iVBZrPf84q47')
      .update({
        Expenses: [...readExpense?.Expenses, parseFloat(expense)],
      });
    return true;
  } catch (e) {
    console.log(e.message);
  }
};
export const saveIncomeForUser = async income => {
  try {
    const readExpense = await getExpense();
    console.log(readExpense);
    const savedExpense = await firestore()
      .collection('MeCash_Demo')
      .doc('oIWgR9o2iVBZrPf84q47')
      .update({
        Income: [...readExpense?.Income, parseFloat(income)],
      });
    return true;
  } catch (e) {
    console.log(e.message);
  }
};
