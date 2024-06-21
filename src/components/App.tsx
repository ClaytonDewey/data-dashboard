import React from 'react';
import { Header, Sidebar } from '.';

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
};
export default App;
