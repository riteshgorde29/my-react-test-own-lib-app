import logo from './logo.svg';
import './App.scss';
import  NitList,  {ExampleComponent}  from 'my-nit-list'
function App() {
  return (
    <div className="App cr">
      <ExampleComponent text="Hellow Sachin" />
      <NitList title="Students" data={['s1','s2','s3','s4']} />
    </div>
  );
}

export default App;
