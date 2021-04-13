import logo from './logo.svg';
import './App.scss';

import React, { createContext, useState } from 'react'; 

import Navbar from './components/Navbar';
import Images from './components/Images';


// Creating Context
export const ImageContext = createContext();

function App() {

	const [images, setImages] = useState([]);

  return (
    <div className="App">

			<ImageContext.Provider

				value={{
					images,
					setImages
				}}
			>

				<Navbar></Navbar>
				<Images></Images>
				
			</ImageContext.Provider>

    </div>
  );
}

export default App;
