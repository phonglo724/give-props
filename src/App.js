
import {Component} from 'react'
import './App.css';
import RedRoom from './components/RedRoom.js'

// function App() {
//   return (
//     <div className="App">
//       <p>App Room</p>
//       <RedRoom phrase="HEY FROM THE APP" />
//     </div>
//   );
// }

class App extends Component {

  state = {
    phrase: "HEY FROM THE APP"
  }

  handleClick = (event) => {
    this.setState({
      phrase: "STILL COMING FROM THE APP"
    })
  }

  changePhrase = (text) => {
    this.setState({
      phrase: text
    })
  }

  render() {
    return (
      <div className="App">
      <p>App Room</p>
      <RedRoom changePhrase={this.changePhrase} phrase={this.state.phrase} />
      <button onClick={this.handleClick}>Change Phrase State</button>
    </div>
    );
  }
}

export default App;




