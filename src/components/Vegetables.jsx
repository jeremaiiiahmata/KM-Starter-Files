import ButtonVegetables from "./ButtonVegetables"

const Vegetables = () => {

    const vegetables = [
        {id: 1, name: "Cabbage", price: 20, emoji: "🥬", soldOut: false},
        {id: 2, name: "Eggplant", price: 30, emoji: "🍆", soldOut: true},
        {id: 3, name: "Broccoli", price: 40, emoji: "🥦", soldOut: true},
        {id: 4, name: "Tomato", price: 55, emoji: "🍅", soldOut: false},
        {id: 5, name: "Carrot", price: 60, emoji: "🥕", soldOut: false}
    ]

  return (
    <>
    {vegetables.map((v) => ( //loops through each element in the vegetables array (which contains objects)
        <ButtonVegetables key={v.id} name={v.name} price={v.price} emoji={v.emoji} soldOut={v.soldOut}/> //since the array is type objects, 
    ))}
    </>
  )
}

export default Vegetables