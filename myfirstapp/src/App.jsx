//This code is to show only 'Hello World'
/*function App() {
  return (
      <h1>Hello World</h1>
  );
}

export default App;
*/

//This code is to show Hello World with Time
function App(props) {
    const currDate = new Date();
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {currDate.toLocaleDateString()} and the time now is {currDate.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  export default App;