import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Policy from '../Policy/Policy';
import Popup from '../Popup/Popup';
import './App.css';

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const handleClickOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);

  const [openPolicy, setOpenPolicy] = useState(false);
  const handleClickOpenPolicy = () => () => setOpenPolicy(true);
  const handleClosePolicy = () => setOpenPolicy(false);

  return (
    <>
      <Header />
      <Main openPopup={handleClickOpenPopup}/>
      <Popup open={openPopup} close={handleClosePopup} openPolicy={handleClickOpenPolicy}/>
      <Policy open={openPolicy} close={handleClosePolicy}/>
    </>
  );
}

export default App;
