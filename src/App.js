
import './App.css';

function App() {
  return (
 <>
 <body>
    <div className='zero'>
      <h1 className='stop-text'>STOP WATCH</h1>
      <p className='number'><span className='minutes'>00</span>: <span className='second'>00</span> : <span className='seconds'>00</span></p>
<div className='buttons'>
  <button className='start'>Start</button>
  <button className='stop'>Sttop</button>
  <button className='reset'>Reset</button>
</div>
    </div>
  </body>
 </>
  );
}

export default App;
