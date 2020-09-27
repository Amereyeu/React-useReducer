import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostList from "./pages/post";
import { PostContextProvider } from "./contexts/PostContext";
import EditPostForm from "./components/EditPostForm";
import PostDetail from "./components/PostDetail";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <PostContextProvider>
          <h3>ContextAPI - useReducer</h3>
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/edit/:id" component={EditPostForm} />
            <Route exact path="/detail/:id" component={PostDetail} />
          </Switch>
        </PostContextProvider>
      </div>
    </Router>
  );
}

export default App;
