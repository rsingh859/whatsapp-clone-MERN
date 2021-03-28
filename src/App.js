import './App.css';
import Chat from './components/Chat/Chat.component';
import Sidebar from './components/Sidebar/Sidebar.component';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>      
    </div>
  );
}

export default App;
