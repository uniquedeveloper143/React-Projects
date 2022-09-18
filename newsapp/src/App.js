import Nav from './Components/Nav';
import News from './Components/News';
import React, { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize=18;
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <> 
      <BrowserRouter>
        <Nav/>
        
        <LoadingBar
        height = {10}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <div className="container">
          <Routes>

            <Route exact path="/"  element={<News setProgress={setProgress} key="general" apikey={apikey} pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact path="/business"  element={<News setProgress={setProgress} key="business" apikey={apikey} pageSize={pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment"  element={<News setProgress={setProgress} key="entertainment" apikey={apikey} pageSize={pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={setProgress}  key="general" apikey={apikey} pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact path="/health"  element={<News setProgress={setProgress} key="health" apikey={apikey} pageSize={pageSize} country="in" category="health"/>}/>
            <Route exact path="/science"  element={<News setProgress={setProgress} key="science" apikey={apikey} pageSize={pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports"  element={<News setProgress={setProgress} key="sports" apikey={apikey} pageSize={pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology"  element={<News setProgress={setProgress} key="technology" apikey={apikey} pageSize={pageSize} country="in" category="technology"/>}/>

          </Routes>
        </div>
      </BrowserRouter>     
    </>
  );
}

export default App;
