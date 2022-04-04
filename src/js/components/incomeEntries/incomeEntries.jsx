import React from "react";
import {
    updateIncomeDescription,
    updateIncomeAmount,
    addIncome
} from './incomeActions';

export default class IncomeEntries extends React.Component{
    constructor(props){
        super(props);

        // binding
        this.handleDescription = this.handleDescription.bind(this);
        this.handleAmountInput = this.handleAmountInput.bind(this);
        this.handleAddIncome  = this.handleAddIncome.bind(this);
    }

    handleDescription (event){
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateIncomeDescription(value));
    }

    handleAmountInput (event) {
        const {dispatch} = this.props;
        const {value} = event.target;
        dispatch(updateIncomeAmount(value));
    }

    handleAddIncome (event){
        event.preventDefault();
        const { description, amount, dispatch } = this.props;
        dispatch(addIncome(description, amount));
    }
    render(){
        const { description, amount, lineItems } = this.props;
        return (
            <div className="card border-danger mb-3">
                <div className="card-header text-white bg-danger">
                    Income Entries
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="income-description">Description</label>
                            <input id="income-description"
                                type="text"
                                className="form-control" 
                                value={ description }
                                onChange={ this.handleDescription }
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="income-amount">Amount</label>
                            <div className="input-group">
                                <span className="input-group-addon">$</span>
                                <input type="text"
                                    className="form-control" 
                                    id="income-amount"
                                    value={ amount }
                                    onChange={ this.handleAmountInput }
                                />
                            </div>
                        </div>
                        
                        <button className="btn btn-danger col-12 mb-5"
                            onClick={ this.handleAddIncome }>
                            + Add Income
                        </button>

                        <table className="table table-sm table-hover">
                            <thead>
                                <tr>
                                    <th>Description</th>
                                    <th style={ {"width": 120 } }>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    lineItems.map( lineItem => (
                                        <tr>
                                            <td>{lineItem.description}</td>
                                            <td>{lineItem.amount}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </form>
                </div>
            </div>
        );
    }
}