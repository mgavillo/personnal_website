import logo from './logo.svg';
import './App.css';
import Character from './Design/Character';
import Ground from './Design/Ground';
import Background00 from './Design/Background00';
import Background01 from './Design/Background01';
import Background02 from './Design/Background02';
import Background03 from './Design/Background03';
import Background04 from './Design/Background04';
import Background05 from './Design/Background05';
import Background06 from './Design/Background06';
import Background07 from './Design/Background07';
import Background08 from './Design/Background08';
import Background09 from './Design/Background09';
import Background10 from './Design/Background10';
import Background11 from './Design/Background11';
import Background12 from './Design/Background12';
import Cv from './Design/Cv';
import React, {useEffect, useState} from 'react';

function App(){
  const [parkour, setParkour] = useState(0);
  const [winsize, setWinsize] = useState([window.innerWidth, window.innerHeight])
  const moving = React.useRef(parkour);

  const handleKeyDown = event =>{
    switch(event.keyCode ) {
      case 39:
          setParkour(parkour + 1);
          break;
      case 37:
          if(parkour > 0)
            setParkour(parkour - 1);
          break;
      default: 
          break;
    }
  };
  useEffect(() => {
    function handleResize() {
      setWinsize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App" >
      <div className="Wrapper" tabIndex="0" onKeyDown={handleKeyDown}>
        <Cv move={parkour * 3} winsize={winsize} ></Cv>
      </div>
    </div>
  );
};

export default App;
