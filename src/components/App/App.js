import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import PopupPolicy from '../PopupPolicy/PopupPolicy';
import Popup from '../Popup/Popup';
import NotFound from '../NotFound/NotFound';
import PolicyPage from '../PolicyPage/PolicyPage';
import PopupSuccess from '../PopupSuccess/PopupSuccess';
import './App.css';

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  const handleClickOpenPopup = () => setOpenPopup(true);
  const handleClosePopup = () => setOpenPopup(false);

  const [openPolicy, setOpenPolicy] = useState(false);
  const handleClickOpenPolicy = () => setOpenPolicy(true);
  const handleClosePolicy = () => setOpenPolicy(false);

  const [openSuccess, setOpenSuccess] = useState(false);
  const handleClickOpenSuccess = () => setOpenSuccess(true);
  const handleCloseSuccess = () => setOpenSuccess(false);

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header openPopup={handleClickOpenPopup}/>
          <Main openPopup={handleClickOpenPopup} />
          <Footer />
          <Popup
            open={openPopup}
            close={handleClosePopup}
            openPopupPolicy={handleClickOpenPolicy}
            openPopupSuccess={handleClickOpenSuccess}
            closePopupSuccess={handleCloseSuccess}
          />
          <PopupPolicy open={openPolicy} close={handleClosePolicy} />
          <PopupSuccess open={openSuccess} close={handleCloseSuccess} />
        </Route>
        <Route path='/policy'>
          <Header />
          <PolicyPage />
          <Footer />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
