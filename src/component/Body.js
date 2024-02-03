import {restrautList} from "../utils/mockData"
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantListState,setRestaurantList] = useState([]);
    const [filteredRes,setFilteredRes] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
      getRestaurants();
    }, []);
  
    async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return restaurantListState?.length===0?<Shimmer/>:(
      <div>
      <button id="btn" onClick={()=>{
        const list=restaurantListState.filter(
          (res)=> res.data.avgRating > 4);
          setFilteredRes(list);
        console.log(restaurantListState);
      }}
      >
        Top rated resturant
      </button>
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
          console.log(e.target.value);
          setSearchText(e.target.value)
        }}>
        </input>
        <button onClick={()=>{
          console.log(restaurantListState);
          const filtered=restaurantListState.filter(res=>res.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
          console.log(filtered);
          setFilteredRes(filtered);
        }}>
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRes.map((restaurant) => {
          return <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            ><RestrauntCard {...restaurant.info} />
            </Link>;
        })}
      </div>
      </div>
    );
  };

  export default Body;