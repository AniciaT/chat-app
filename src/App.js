import React from 'react';
import Contact from './components/Contact.js';


function App() {
  return (
    <div className="App">
      <Contact name="Keith Stone" avatar="https://randomuser.me/api/portraits/men/13.jpg" online={false}/>
      <Contact name="Jeanette Sullivan" avatar="https://randomuser.me/api/portraits/women/57.jpg" online={false}/>
      <Contact name="Nellie Beck" avatar="https://randomuser.me/api/portraits/women/88.jpg" online={true} />
    </div>
  );
}

export default App;
