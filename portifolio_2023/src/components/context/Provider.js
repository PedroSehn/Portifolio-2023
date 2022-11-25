import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) { 
  const [HeaderSelected, SetHeaderSelected] = useState('perfil');


  return(
    <AppContext.Provider value={ {
      HeaderSelected, SetHeaderSelected
    } }>
      {children}
    </AppContext.Provider>
  );

}

export default Provider;