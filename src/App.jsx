import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Analytics id="prj_TJcrk6KNyP8EqhNJ1zV1Ceq4hUeB">
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Works />
          <Experience />
          <Tech />
          <div className="relative z-0">
          </div>
        </div>
      </BrowserRouter>
    </Analytics>
  );
}

export default App;
