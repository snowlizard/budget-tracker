export const updateExpenseDescription = (description) => {
    return {
        type: 'UPDATE_EXPENSE_DESCRIPTION',
        payload: { description }
    };
};

export const updateExpenseAmount = (amount) => {
    return {
        type: 'UPDATE_EXPENSE_AMOUNT',
        payload: { amount }
    };
};

export const addExpense = (description, amount) => {
    return {
        type: 'ADD_EXPENSE',
        payload: { description, amount: parseFloat(amount) }
    };
};