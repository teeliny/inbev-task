import { ScreenProvider } from './context/screenContext';
import Home from './pages/home/Home';
function App() {
  return (
    <ScreenProvider>
      <div className="App">
        <Home />
      </div>
    </ScreenProvider>
  );
}

export default App;
