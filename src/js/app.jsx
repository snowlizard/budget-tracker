import React from 'react';
import IncomeEntries from './components/incomeEntries';
import ExportEntries from './components/expenseEntries';
import Summary from './components/summary';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3 text-center">Budget Tracker</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <IncomeEntries />
          </div>
          <div className="col-12 col-md-6 mb-4">
            <ExportEntries />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <Summary />
          </div>
        </div>
      </div>
    );
  }
}
