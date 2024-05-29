import './App.css';
import Content from './components/Content';
import NavBar from './components/NavBar';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

export default function App() {
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="*" element={<Content setProgress={setProgress} apikey={apikey}   key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path="/business" element={<Content setProgress={setProgress} apikey={apikey}   key="business" pageSize={6} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<Content setProgress={setProgress} apikey={apikey}   key="entertainment" pageSize={6} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<Content setProgress={setProgress} apikey={apikey}   key="general" pageSize={6} country="in" category="general" />} />
            <Route exact path="/health" element={<Content setProgress={setProgress} apikey={apikey}   key="health" pageSize={6} country="in" category="health" />} />
            <Route exact path="/science" element={<Content setProgress={setProgress} apikey={apikey}   key="science" pageSize={6} country="in" category="science" />} />
            <Route exact path="/sports" element={<Content setProgress={setProgress} apikey={apikey}   key="sports" pageSize={6} country="in" category="sports" />} />
            <Route exact path="/technology" element={<Content setProgress={setProgress} apikey={apikey}   key="technology" pageSize={6} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
}
