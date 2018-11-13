import React, { Component } from 'react';
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import Pet from '../../components/Pet'
import Button from '../../components/Button'
import Content from '../../components/Content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isMain: true,
      location: ''
    }
  }

  toggleIsMain = () => {
    this.setState({isMain: !this.state.isMain})
  }

  changeLocation = (location) => {
    this.setState({location})
  }

  render() {
    return (
      <section>
        <Header changeLocation={this.changeLocation} />
        <Button toggleIsMain={this.toggleIsMain} />
        <Container>
          {this.state.location === 'home'
          ? <Main />
          : this.state.location === 'pet'
          ? <Content />
          : <h2>This works now?</h2>}
        </Container>
        <Footer />
      </section>
    );
  }
}

export default App;
