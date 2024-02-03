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
import About from "../src/component/About" 
import Error from "../src/component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "../src/component/Contact";
import RestrauntMenu from "../src/component/RestrauntMenu";
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
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestrauntMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
