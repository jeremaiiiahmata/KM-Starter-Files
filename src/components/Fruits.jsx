import ButtonFruits from "./ButtonFruits";
import ButtonPrice from "./ButtonPrice";

const Fruits = () => {

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple", "Grapes"]
const prices = [10,20,30,40,50,60];

  return (
    <>
        <br/>
        {prices.map((price) => (
            <ButtonPrice price={price * 0.32} key={price}/>
        ))}

        <br/>
        {fruits.map((fruit) => ( //loops through each element in the fruit array and places it in a list item. NOTE : check for the parentheses, it is not using a curly brace.
             <ButtonFruits fruitName={fruit} key={fruit}/> // in the devtools, it will notify an error saying that each item should have a key prop, to do that, lagyan mo ng value yung key (most of the time id)
        ))}
    </>
  )
}

export default Fruits