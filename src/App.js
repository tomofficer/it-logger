import React, { useEffect } from 'react'
import { Fragment } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/logs/AddBtn'
import AddLogModal from './components/logs/AddLogModal'
import './App.css'


const App = () => {

  useEffect(() => {
    //init materialize js
    M.AutoInit();
  });

  return (
    <div className="App">
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <Logs />
        </div>
      </Fragment>
      
    </div>
  );
}

export default App;
