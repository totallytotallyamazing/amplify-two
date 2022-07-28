import logo from './logo.svg';
import './App.css';
import '@aws-amplify/ui-react/styles.css';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';

function App() {
    return (
        <div>Test
            <Authenticator>
                {({ signOut }) => (
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1>We now have Auth!</h1>
                        </header>
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                )}
            </Authenticator>
        </div>
    );
  };

// export default withAuthenticator(App);
export default App;
