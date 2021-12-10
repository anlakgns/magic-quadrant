import './App.css';
import MagicQuadrant from './page/MagicQuadrant';
import StateProvider from './shared/state/AppState';

function App() {
  return (
    <StateProvider>
      <MagicQuadrant />
    </StateProvider>
  );
}

export default App;
