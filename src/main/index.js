import React from 'react';
import Section1 from './section1/index';
import Section2 from './section2/index';
import Section3 from './section3/index';


function Main({setId, Datas}) {
  return (
    <main>
        <Section1 />
        <Section2 />
        <Section3 setId={setId} Datas={Datas} />
    </main>
  )
}

export default Main