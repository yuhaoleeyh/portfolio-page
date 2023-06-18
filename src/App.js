import React, {useEffect} from 'react';
import NavBar from './components/common/NavBar';
import HomePage from './components/main/HomePage';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function App() {

  return (
    <div>
        <NavBar/>
        <HomePage/>
    </div>
  );
}

export default App;