import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar, Home, PrivateLabel, About, Contact, Products, ComfortFitPets, DriftToSleep, CupsAndUnderware, BraMoldedCup, BraUnderwires, ProductHome, CupsAndUnderwareHome, ComfortFitPetsHome, FitInstructionsColder, FitInstructionsWarmer, FitInstructionsInsidePlush, FitInstructionsSoftPadded, FitInstructionsUltraSoftPadded, SkipLink } from './components';


const App = () => {
  return (
    <>
      <SkipLink className="primary skip-link">
        <button type="button" accesskey="g">Skip Navigation Links</button>
      </SkipLink>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="privateLabel" element={<PrivateLabel />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} >
          <Route index element={<ProductHome />} />
          <Route path="comfort-fit-pets" element={<ComfortFitPets />} >
            <Route index element={<ComfortFitPetsHome />} />
            <Route path="colder-weather-harness/fit-instructions" element={<FitInstructionsColder />} />
            <Route path="warmer-weather-harness/fit-instructions" element={<FitInstructionsWarmer />} />
            <Route path="inside-plush-harness/fit-instructions" element={<FitInstructionsInsidePlush />} />
            <Route path="soft-padded-dog-collar/fit-instructions" element={<FitInstructionsSoftPadded />} />
            <Route path="ultra-soft-padded-dog-collar/fit-instructions" element={<FitInstructionsUltraSoftPadded />} />
          </Route>
          <Route path="drift-to-sleep" element={<DriftToSleep />} />
          <Route path="cups-and-underware" element={<CupsAndUnderware />} >
            <Route index element={<CupsAndUnderwareHome />} />
            <Route path="bra-molded-cup" element={<BraMoldedCup />} />
            <Route path="bra-underwires" element={<BraUnderwires />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
