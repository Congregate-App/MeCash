import React, {useState, useEffect} from 'react';
import Dialog from 'react-native-dialog';
import {saveExpenseForUser, saveIncomeForUser} from '../utils/apiConnect';

export default function DialogBox({
  title = 'title',
  ButtonLabel,
  Description,
  visible,
  setVisible,
  setIncome,
  setExpenses,
  expenses,
  income,
}) {
  const [value, setValue] = useState('');
  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = async valuee => {
    try {
      if (title === 'Add Expense') {
        const response = await saveExpenseForUser(valuee);
        setExpenses([...expenses, parseFloat(value)]);
        return response && setVisible(false);
      }
      const response = await saveIncomeForUser(valuee);
      setIncome([...income, parseFloat(value)]);
      return response && setVisible(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Dialog.Container visible={visible} onBackdropPress={handleCancel}>
      <Dialog.Title>{[title]}</Dialog.Title>
      <Dialog.Description>{Description}</Dialog.Description>
      <Dialog.Input label={'¢'} value={value} onChangeText={v => setValue(v)} />
      <Dialog.Button
        label={ButtonLabel}
        bold
        onPress={() => handleSubmit(value)}
      />
    </Dialog.Container>
  );
}
