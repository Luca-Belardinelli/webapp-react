// IMPORTO LE PAGINE
import Homepage from "./pages/Homepage";
import Moviespage from "./pages/Moviespage";


// IMPORTO IL LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";

// IMPORTO GESTIONE ROTTE
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="/movies/:id" element={<Moviespage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
