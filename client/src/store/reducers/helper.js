export const toggleFavorite = (state, {id}) => {
  const item = state.find(item => item.id === id);
  const pos = state.findIndex(item => item.id === id);
  const val = state[pos].favorite ? false:true;
  const modItem = {
    ...item,
    favorite: val
  }
  //override the item at position x and return a new object to the redux store
  return Object.assign([...state], {[pos]: modItem});
}

//SOLUTION for changing immutable values so redux picks up the change
//https://medium.com/@giltayar/immutably-setting-a-value-in-a-js-array-or-how-an-array-is-also-an-object-55337f4d6702
// const array = ['a', 'b', 'c', 'd']
// console.log(Object.assign([...array], {2: 'x'}))
  // ['a','b','x','d']