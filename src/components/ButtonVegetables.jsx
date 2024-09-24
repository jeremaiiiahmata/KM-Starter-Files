const ButtonVegetables = ({ name, price, emoji, soldOut }) => {
  return (
    <>
       
        <button type="button" className="btn btn-success my-3 mx-2">{name} {emoji} : ${price} | {soldOut ? "Sold Out!" : "Available"}</button>
    </>
  )
}

export default ButtonVegetables

// {price > 20  // checks if the price is greater than five
//     ? <button type="button" className="btn btn-success my-3 mx-2">{name} {emoji} : ${price}</button> //if the price is greater than 5, it will return a button of that certain vegetable
//     : "" // it will return an empty if it doesn't pass the condition.
// }