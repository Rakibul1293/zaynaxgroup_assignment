import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from './components/header_footer';
import MainContent from './components/main_content/MainContent';
import Services from './components/services/Services';
import Blog from './components/blog/Blog';
import './App.css';

export const context = React.createContext();

function App() {
  const [getSearchTerm, setSearchTerm] = React.useState("");
  const [getRefineVal, setRefineVal] = React.useState("");
  const [getSortVal, setSortVal] = React.useState("");
    
  return (
    <div className="container pt-4">
      <Router>
         <context.Provider value={{ getSearchTerm, setSearchTerm, getRefineVal, setRefineVal, getSortVal, setSortVal }}>
             <Switch>
                <Layout>
                    <Route path="/">
                        <MainContent />
                        <Blog />
                        <Services />
                    </Route>
                </Layout>
             </Switch>
         </context.Provider>
      </Router>
    </div>
  );
}

export default App;
