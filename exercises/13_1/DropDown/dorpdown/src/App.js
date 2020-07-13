import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Button from './Button';
import Alert from './Alert';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isDisableButton: false,
    }
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisableButton: !state.isDisableButton
      }
    ))
  }

  render() {
    const content = [
      {id: 1, item: 'a'},
      {id: 2, item: 'b'},
      {id: 3, item: 'c'},
      {id: 4, item: 'd'},
    ];
    return (
      <div className='main'>
        <Button content="Clique aqui" isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
          <Alert
            hideComponent={this.changeShowComponent}
          >
            {
              {
                title: "Modal",
                content: "Coloque qualquer coisa aqui.",
                timeSeconds: 4,
              }
            }
          </Alert>}
          <div className="App">
           <Dropdown content={content}>Título da lista customizado</Dropdown>
          </div>
      </div>
    )
  }
}

export default App;
