import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SongOverview from "./components/SongOverview";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <switch>
          <Route path="/"></Route>
          <Route path="/components/about" component={About} />
          <Route path="/components/songoverview" component={SongOverview} />
        </switch>
      </div>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <SongOverview />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav className="navBar">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/songoverview">Playlist</Link>
//             </li>
//           </ul>
//         </nav>

/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */

// <Switch>
//   <Route path="/about">
//     <About />
//   </Route>
//   <Route path="/songoverview">
//     <SongOverview />
//   </Route>
//   <Route path="/">
//     <Home />
//   </Route>
// </Switch>
// </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>about</h2>;
// }

// function SongOverview() {
//   return <h1></h1>;
// }
