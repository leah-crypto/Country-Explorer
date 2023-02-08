import { configureStore } from "@reduxjs/toolkit";
import displayCountrySlice from "./slices/displayCountrySlice";
import potentialCountriesReducer from "./slices/potentialCountriesSlice";
import displayedCountryReducer from "../redux/slices/displayCountrySlice"


export default configureStore({
  reducer: { 
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayedCountryReducer
  },
});
