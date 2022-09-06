import './App.css';
import Background from './Background';
import TopBar from './TopBar';
import StoreListing from './StoreListing';
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <TopBar></TopBar>
      <Background></Background>
      <StoreListing></StoreListing>
    </div>
  );
}

export default App;
