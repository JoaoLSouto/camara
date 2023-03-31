import React, { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import { DeputadosCard } from '../../components/DeputadosCard/styles';

function Deputados() {
  return (
      <>
        <div>
          <DeputadosCard />
        </div>
      </>
  );
}


export { Deputados }