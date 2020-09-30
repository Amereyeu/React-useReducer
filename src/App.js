import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostList from "./pages/post";
import { PostContextProvider } from "./contexts/PostContext";
import EditPostForm from "./components/EditPostForm";
import PostDetail from "./components/PostDetail";

import "./App.css";

function App() {
  return (
    <PostContextProvider>
      <Router>
        <div className="App">
          <h3>ContextAPI - useReducer</h3>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/edit/:id" component={EditPostForm} />
            <Route exact path="/detail/:id" component={PostDetail} />
          </Switch>
        </div>
      </Router>
    </PostContextProvider>
  );
}

export default App;
