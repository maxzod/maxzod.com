import React, { useState } from 'react';

const Box = ({ items }) => {
   const [hoveredIndex, setHoveredIndex] = useState(null);

   const handleClick = (link) => {
      window.open(link, '_blank');
   };

   return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
         {items.map((item, index) => (
            <div
               key={index}
               style={{
                  padding: '5px',
                  borderRadius: '3px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  color: 'white',
                  border: '1px solid white',
                  transition: 'background-color 0.3s',
                  backgroundColor: hoveredIndex === index ? 'red' : 'transparent'
               }}
               onClick={() => handleClick(item.link)}
               onMouseEnter={() => setHoveredIndex(index)}
               onMouseLeave={() => setHoveredIndex(null)}
            >
               <h3 style={{ margin: '0' }}>{item.title}</h3>
               <p style={{ margin: '0' }}>{item.description}</p>
            </div>
         ))}
      </div>
   );
};

export default Box;
