export const addFavProp = (items) => {
  return items.map(item => {
    item.favorite = false;
    return item;
  })
}