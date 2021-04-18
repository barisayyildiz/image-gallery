import logo from './logo.svg';
import './App.scss';

import React, { createContext, useState } from 'react'; 

import Navbar from './components/Navbar';
import Images from './components/Images';


// Creating Context
export const ImageContext = createContext();

function App() {

	const [images, setImages] = useState([]);
	const [notFound, setNotFound] = useState(false);

  return (
    <div className="App">

			<ImageContext.Provider

				value={{
					images,
					setImages,
					notFound,
					setNotFound
				}}
			>

				<Navbar></Navbar>
				<Images></Images>
				
			</ImageContext.Provider>

    </div>
  );
}

export default App;
