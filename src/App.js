import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>We now have Auth!</h1>
        </header>
        {/* <Button onClick={signOut}>Sign Out</Button> */}
      </div>
    );
  }

export default withAuthenticator(App);
