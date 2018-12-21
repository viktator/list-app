import React, { Component } from "react";
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Select from 'react-select'
import DatePicker from 'react-date-picker';
import './main.css'

import { articles } from "../fixtures";

class App extends Component {

    state = {
        selection: null,
        date: new Date()
    }

    changeSelection = (selection) => {
        this.setState({selection})
    }
    handleCalendar = (date) => {
        this.setState({date})
    }
  render() {

      const options = articles.map(article => ({
          label: article.title,
          value: article.id
      }))
    return (
      <div>
       <UserForm />
          <DatePicker
              className={'datapicker'}
              onChange={this.handleCalendar}
              value={this.state.date}
          />
          <Select options={options} vlaue={this.state.selection} onChange={this.changeSelection}  />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App;
