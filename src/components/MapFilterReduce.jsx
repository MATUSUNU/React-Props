import emojis from "../emojipedia"
import EmojiCard from "./EmojiCard";


// Filter
var list = [1,2,3,23,10,55,9]
// function filterFunc (num) {
//   return num > 10
// }
// var store = list.filter(filterFunc)
// console.log(store) // 23, 25


// Reduce
var store = []
var number = 0
// function reduceFunc(num) {
//   number += num
// }
// list.forEach(reduceFunc)
// store.push(number)
// console.log(store[0])

list.forEach(function (num) {
  number += num;
});
// store.push(number)
// console.log(store[0]) // 103


// function reduceFunc(store, number) {
//   return store+=number
// }
// var result = list.reduce(reduceFunc)
// console.log("Result is working: ",result)

var result = list.reduce(function (accumulator, number) {
  return accumulator+=number;
})
console.log("Result is working: ",result);


function MapFilterReduce() {
  return (
    <div className="container">
      <div className="row justify-content-center my-5">

        <h2 className="d-flex justify-content-center mb-3">Map/ForLoop</h2>
        {/* Map Feature: create a new array by doing sth with each item in an array. */}
        {emojis.map(emoji => (
          <EmojiCard
            key={emoji.id}
            name={emoji.name}
            emoji={emoji.emoji}
            description={
              emoji.description.length > 100?
              emoji.description.substring(0,100)+"...":
              emoji.description
              }
          />
        ))}

        <h2 className="d-flex justify-content-center mt-5 mb-3">Filter</h2>
        {/* Filter Feature: create a new array by keeping the items that return true. */}
        {emojis.filter(emoji => (
          emoji.name.toLowerCase().includes("car"))).map(emoji =>
            <EmojiCard
              key={emoji.id}
              name={emoji.name}
              emoji={emoji.emoji}
              description={
                emoji.description.length > 100?
                emoji.description.substring(0,100)+"...":
                emoji.description
              }
            />
        )}

        {/* Reduce Feature: accumulate a value by doing something to each item in an array. */}
        <div className="text-center">
          <p>
            Total description Length: {" "}
            {emojis.reduce((acc, emoji) => acc + emoji.description.length,0)}
          </p>

          <p>
            Racing Car description Length: {" "}
            {emojis.filter(emoji =>
              emoji.name.toLowerCase().includes("racing car")
            ).reduce((acc,emoji) =>
              acc + emoji.description.length,0
            )
            }
          </p>
        </div>

        <h2 className="d-flex justify-content-center mt-5 mb-3">Find</h2>
        {/* Find Feature: find the first item that matches from an array. */}
        <p className="text-center">
          Santa Claus description Length: {" "}
          {emojis.find(emoji => emoji.name.toLowerCase().includes("santa claus"))?.description.length}
        </p>

        <h2 className="d-flex justify-content-center mt-5 mb-3">FindIndex</h2>
        {/* FindIndex Feature: find the index of the first item that matches. */}
        <p className="text-center">
          Man Elf located at index: {" "}
          {emojis.findIndex(emoji =>
            emoji.name.toLowerCase().includes("man elf"))
          }
        </p>

      </div>
    </div>
  );
}

export default MapFilterReduce;
