import './assets/css/App.css'
import { Routes, Route } from 'react-router-dom'

import { IndexPage } from './pages/IndexPage'
import { MockPage } from './pages/MockPage'
import { ErrorPage } from './pages/ErrorPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/mock" element={<MockPage />} />
        <Route path="*" element={<ErrorPage message={"Page not found"} />} />
      </Routes>
    </>
  )
}

export default App
