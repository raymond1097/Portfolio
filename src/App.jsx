import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "./components/ui/Toaster.jsx"

const App = () => {

  return (
    <>
    <Toaster />  
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
