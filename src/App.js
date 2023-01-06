import './App.css';
import { useEffect } from 'react';
import Footer from './components/Foooter';
import Header from './components/Header';

function App() {
  useEffect(() => {
    document.title = 'Angel Cervantes';
  }, []);

  return(
    <div className="app">
        <Header/>
        <Footer/>
    </div>
)
}

export default App;
