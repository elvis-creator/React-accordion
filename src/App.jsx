import React from 'react'
import {data} from './faqData'
import Accordion from './Accordion'
function App() {
  return (
    <main>
      <h2>Accordion Project</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates</p>

      <menu>
         {data.map((item) => <Accordion key={item.id}{...item} /> )}
      </menu>
    </main>
  )
}

export default App