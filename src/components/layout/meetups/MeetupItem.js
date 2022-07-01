import React,{useContext} from "react";
import Card from "../ui/Card";

import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../../store/favorite-context";


const MeetupItem = (props) => {
  console.log(props);
  const favoriteCtx= useContext(FavoritesContext )
  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id)
  console.log(itemIsFavorite);
  const toggleFavorite =()=>{
   if(itemIsFavorite){
     favoriteCtx.removeFavorite(props.id)
   }
   else{
     console.log("i am in ")
     favoriteCtx.addFavorite({
      id:props.id,
      title:props.tite,
      description:props.description,
      image:props.image,
      address:props.address
     })
   }
  }
  
  return (<Card>
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavorite}> {itemIsFavorite?"Remove From Favorites ":"Add to Favorites"}To Favorites</button>
      </div>
    </li>
    </Card>
  );
};
export default MeetupItem;
