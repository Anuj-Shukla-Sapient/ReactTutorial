import { useContext } from "react";
import FavoritesContext from "../store/favorite-context";
import MeetupList from "../components/layout/meetups/MeetupList";
const FavoritesPage =()=>{
    const favoriteCtx = useContext(FavoritesContext);
    let content;
    if(favoriteCtx.totalFavorites == 0){
        content = <p> You got no Favorites yet, Start adding Some</p>
    }
    else{
        content = <MeetupList meetups = {favoriteCtx.favorites} />
    }
    return (<section>
        <h1>My Favorites</h1>
        {content}
        </section>)

}
export default FavoritesPage;