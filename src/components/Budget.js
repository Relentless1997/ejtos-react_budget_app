import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, expense) =>{
        return total+=expense.cost;
    },0);
    const budgetupdater =(newBudget) => {
        if (newBudget <= totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        }
        else {
            dispatch({
                type: "SET_BUDGET",
                payload: newBudget
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" max="20000" step="10" value={budget} onChange={(e)=>{budgetupdater(e.target.value)}}></input>
        </div>
    )
};
export default Budget;
