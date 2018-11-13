import React, { Component } from 'react';
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import Container from '../../components/Container'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Donny',
      elements: []
    }
  }

  handleChange = (event) => {
    this.setState({name: event.target.value});
  }

  makeNewSection = event => {
    this.setState({elements: [...this.state.elements, {title: 'title', text: 'text'}]})
  }

  render() {
    return (
      <section>
        <Header name={this.state.name} />
        <Container>
          <Main elements={this.state.elements} makeNewSection={this.makeNewSection} name={this.state.name} handleChange={this.handleChange} />
        </Container>
        <Footer />
      </section>
    );
  }
}

export default App;
