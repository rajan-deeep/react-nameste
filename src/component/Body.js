import {restrautList} from "../utils/mockData"
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

const Body = () => {
    const [restaurantListState,setRestaurantList] = useState(restrautList);
    return (
      <div>
      <button id="btn" onClick={()=>{
        const list=restaurantListState.filter(
          (res)=> res.data.avgRating > 4);
        setRestaurantList(list);
        console.log(restaurantListState);
      }}
      >
        Top rated resturant
      </button>
      <div className="restaurant-list">
        {restaurantListState.map((restaurant) => {
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </div>
    );
  };

  export default Body;