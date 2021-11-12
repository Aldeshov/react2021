import React from 'react'
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RemoteManager from './components/RemoteManager';
import LocalManager from './components/LocalManager';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/remote' element={<RemoteManager />} />
        <Route path='/local' element={<LocalManager />} />
        
        <Route exact path="/*" element={<Navigate to="/local" />} />
      </Routes>
    </Router>
  )
}
export default App;