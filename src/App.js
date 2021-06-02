import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './components/card-list/card-list.styles.css';
import './App.css';
import { Input } from './components/input/input.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    const data = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const userData = await res.json();

      this.setState({ monsters: userData });
    };
    data();
  }

  handleInput = (e) => {
    this.setState({
      ...this.state,
      searchField: e.target.value,
    });
  };

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Input
          searchField={this.searchField}
          placeholder='Search Monsters'
          handleInput={this.handleInput}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
