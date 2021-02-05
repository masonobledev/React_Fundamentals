import './App.css';
import Header from './components/Header'
import Aboutme from './components/challenges/day01/Aboutme'
import Home from './components/Home'
import Footer from './components/Footer'


function App() { // this is a root component
                // parent function
  const name = 'Patrick' // JS above return statement can be
                      // injected into JSX using { }

  return (
    <div className="App">
      <h1>Welcome to React, {name}</h1>
            {/* <h2>We just modified our root App component</h2>
            <h3>CHALLENGE!</h3>
            <p>Create ./components/challenges/day01 folder</p>
            <p>Create a component with h1 tag of your name,
                p tag with description of yourself, and an 
                ordered list of two truths and a lie.
            </p>
            <p>Export, import into App, and mount it.</p> */}
      <Header /> { /* this is how you mount a component */ }
      <Aboutme /> { /* child function */ }
      <Home />
      <Footer />
    </div>
  );
};

export default App;
