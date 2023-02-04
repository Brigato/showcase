import './App.css';
import Timer from './components/Timer';

function App() {
  return (
    <div className="App">
      <h1>Pomodoro timer</h1>
      <Timer time={25} />
    </div>
  );
}

export default App;
