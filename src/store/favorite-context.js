import { createContext, useState } from "react";
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (addFavoriteandler) => {},
  removeFavorite: (removeFavoriteandler) => {},
  itemIsFavorite: (meetupId)=>{},
});
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  console.log( userFavorites)
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteandler,
    removeFavorite: removeFavoriteandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  console.log(userFavorites)
  function addFavoriteandler(favoriteMeetup) {
    console.log(favoriteMeetup)
    setUserFavorites((previousUserFavorite) => {
      return previousUserFavorite.concat(favoriteMeetup);
    });
    console.log(userFavorites)
  }
  function removeFavoriteandler(meetupId) {
    setUserFavorites((previousUSerFavorite) => {
       return previousUSerFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    console.log( userFavorites);
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
