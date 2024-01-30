import {restrautList} from "../utils/mockData"
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const [restaurantListState,setRestaurantList] = useState(restrautList);
    const [filteredRes,setFilteredRes] = useState(restrautList);
    const [searchText,setSearchText] = useState("");

    // useEffect(()=>{
    //   fetchData();
    // },[]);


    //todo api call to swiggy or zomata
    // const fetchData = async()=>{
    //   const data  = await fetch();
    //   const json = await data.json();

    //   setRestaurantList(json.data.cards[2].data.data.cards);
    //   setFilteredRes(json.data.cards[2].data.data.cards);
    // }

    return restaurantListState.length===0?<Shimmer/>:(
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
          return <RestrauntCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
      </div>
    );
  };

  export default Body;