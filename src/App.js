import React, { Component } from 'react';
import './App.css';

import { Container, Row, Col } from 'reactstrap';

import Sidebar from './components/sidebar/Sidebar';
import Wizard from './components/wizard/Wizard';

class App extends Component {
  state = {
    active: 0,
    steps: [
      {
        name: 'Prerequisites',
        complete: false
      },
      {
        name: 'Directory & Workspace',
        complete: false
      },
      {
        name: 'Router',
        complete: false
      },
      {
        name: 'Pre-Processor',
        complete: false
      },
      {
        name: 'UI Library',
        complete: false
      },
      {
        name: 'Authentication',
        complete: false
      },
      {
        name: 'Database',
        complete: false
      },
      {
        name: 'Ajax Library',
        complete: false
      },
      {
        name: 'Testing Library',
        complete: false
      },
      {
        name: 'Time Library',
        complete: false
      },
      {
        name: 'Type Checking',
        complete: false
      },
      {
        name: 'Run Setup',
        complete: false
      },

    ]
  }

  // guess a method here when clicked it will change the active state
  handleActiveState = (id) => {
    // e.preventDefault();
    this.setState({ active: id });
  }
  handleArrowNav = (event) => {
    const currentActive = this.state.active;
    const totalSteps = this.state.steps.length;
    console.log(event.keyCode);

    // next step
    if ([13, 39, 40].includes(event.keyCode) && (totalSteps - 1) > currentActive) {
      this.setState({ active: currentActive + 1 })
    }

    // previous step
    if ([8, 37, 38].includes(event.keyCode) && currentActive > 0) {
      this.setState({ active: currentActive - 1 })
    }
  }
  componentDidMount() {
    // NOTE: this is going to have unintended consequences for keyboard navigation elsewhere
    // As soon as you add a text input and use arrows to shift your cursor around, navigation will occur
    // If you think it's valuable, I'd limit it to when focus is inside the nav
    document.addEventListener('keydown', this.handleArrowNav, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleArrowNav, false);
  }

  render() {
    return (
      <Container fluid={true} className="App">
        <Row noGutters={true}>
          <Col sm="12" md="4">
            <Sidebar
              active={this.state.active}
              steps={this.state.steps}
              onHandleActiveState={this.handleActiveState}
            />
          </Col>
          <Col sm="12" md="8">
            <Wizard
              active={this.state.active}
              steps={this.state.steps}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
