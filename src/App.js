import React from 'react';
import Header from "./molecules/header/header.jsx"
import ApiStatus from "./elements/ApiStatus/ApiStatus.jsx"

function App() {
  return (
    <div>
      <Header />
      <div>
        <ApiStatus />
      </div>
    </div>
  );
}

export default App;
