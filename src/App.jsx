import { useState } from 'react'
import Hello from './components/Hello'
import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';
import Conditional from './components/Conditional';
import Message from './components/Message';
import LikeCounter from './components/LikeCounter'
import Form from './components/Form';

function App() {
  const [count, setCount] = useState(0)

  const seatNumbers = [1,2,3,4,5];

  const dataJerem = {
    name: "Jerem",
    message: "Hi",
    seatNumbers: seatNumbers
  };

  const dataAthena = {
    name: "Athena",
    message: "I love you",
    seatNumbers: seatNumbers
  }

  return (
    <>
      <Conditional/>
        <br/>

      <Hello data={dataJerem}/>
      <Hello data={dataAthena}/> {/* passing object*/}

      <Fruits/>

        <br/>
      <Vegetables/>

        <br/>
      <Message/>

        <br/>
      <LikeCounter />

      <Form />
      
      {/* <Hello name="Mina" message="Hello" seatNumbers={seatNumbers}/> */}  {/*passing string values*/}
    </>
  )
}

export default App;
