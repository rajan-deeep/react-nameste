// import React from "react";
// import ReactDOM from "react-dom/client";

// const heading= React.createElement("div",{id: "parent"},
// React.createElement("div",{id: "child"},
// [React.createElement("h1",{},"This is h1 react!!"),
// React.createElement("h2",{},"This is h2 react!!")]));

/*
//react element
const reactjsx=(<h1 id="header"> 
This is react jsx element!!
</h1>)

//react component
const HeaderComponent = () => (
    <div>
    <h1 id="header"> 
    This is react jsx component!!
</h1>
{reactjsx}
<h2>{200+300}</h2>
</div>
)

const root= ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactjsx);
root.render(<HeaderComponent/>);
*/






// -------// -------// -------// -------// -------// -------// -------// -------// -------// -------

import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "../src/component/Header";
import Body from "../src/component/Body"
import Footer from "../src/component/Footer"
/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

// no key (not acceptable)<<<<<<<<<<< index key(last option) <<<<< unquie key (best practice)


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
