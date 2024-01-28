const heading= React.createElement("div",{id: "parent"},
React.createElement("div",{id: "child"},
[React.createElement("h1",{},"This is h1 react!!"),
React.createElement("h2",{},"This is h2 react!!")]));

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);