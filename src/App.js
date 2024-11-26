import './App.css';
import TaskInput from './component/TaskInput';

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover'
    }}>
      <TaskInput />
    </div>
  );
}

export default App;
