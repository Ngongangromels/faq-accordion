import React, { useState, useEffect } from 'react';
import './App.css';
import { getFaqAccordionData as getAccordionData } from "./server/server1";
import { FaqItem } from './type/';
import { BackgroundImage } from './component/BackgroundImage';
import iconStar from './assets/images/iconStar.svg'
import { Accordion } from './component/Accordion';
function App() {
  const [faqs, setFaqs] = useState<FaqItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    (async () => {
      setLoading(true);
      const Accordion = await getAccordionData();
      setTimeout(() => {
        setFaqs(Accordion);
        setLoading(false);
      }, 3500);
    })();
  }, []);

  return (
    <div className="App">
      <BackgroundImage />
     <section className='faqs'>
      <h1>
        {/* image */}
        <img className='icon-star' src={iconStar} />
        <span className='title'>FAQs</span>
      </h1>
      { loading ? (<p className='loading'>Loading....</p> ): (<div className='faqAccordion'>
      <Accordion items={faqs!} /> </div>)
      }
     </section>
    </div>


  );
}

export default App;
