import logo from './holberton-logo.jpg';
import './App.css';
import {getFooterCopy, getFullYear} from './utils.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p> Login to access the full dashboard </p>
        <form>
          <label htmlFor='email'>Email:</label>
          <input type="email" name='email'></input>
          <label htmlFor="password">Password:</label>
          <input type="password" name='password'></input>
          <button>OK</button>
        </form>
      </div>

      <footer className="App-footer">
        {getFullYear()}
        {getFooterCopy()}
      </footer>
    </div>
  );
}

export default App;
