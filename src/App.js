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
import React, {useEffect, useState} from 'react';

function App(){
  const [parkour, setParkour] = useState(0);
  const moving = React.useRef(parkour);

  const handleKeyDown = event =>{
    console.log("wsh alors");
    console.log(event.keyCode);
    switch(event.keyCode ) {
      case 39:
          console.log(parkour);
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
  // useEffect(() => {
  //   console.log("wsh alors");
  //   const handleKeyDown = event =>{
  //     switch(event.keyCode ) {
  //       case 39:
  //           console.log(moving.current);
  //           setParkour(moving.current + 1);
  //           break;
  //       default: 
  //           break;
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //     // clearInterval(interval);
  //   }
  // }, []);

  return (
    <div className="App" >
      <div className="Wrapper" tabIndex="0" onKeyDown={handleKeyDown}>
        
        {(parkour >= 0 && parkour < 280) && <Background08 move={parkour}></Background08>}
        {/* {(parkour >= 0 && parkour < 100) && <Background11></Background11>} */}
        
        {(parkour >= 0 && parkour < 280) && <Background05 move={parkour}></Background05>}
        {(parkour > 0 && parkour < 400) && <Background04 move={parkour}></Background04>}

        {parkour > 1000 && <Background00></Background00>}
        {parkour > 1000 && <Background01></Background01>}
        {parkour > 1000 && <Background02></Background02>}
        {parkour > 1000 && <Background03></Background03>}

        {parkour > 1000 && <Background06></Background06>}
        {parkour > 1000 && <Background07></Background07>}

        {/* <Background09></Background09> */}
        {/* <Background10></Background10> */}
        {/* <Background11></Background11> */}
        {/* {parkour > 10 && <Background12></Background12>} */}
        <Ground></Ground>
        <Character></Character>
      </div>
    </div>
  );
};

export default App;
