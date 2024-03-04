import React, { useState } from 'react';

const Box = ({ }) => {
   const items = [
      { title: 'Readable', description: 'a collection of helpers and extension for dart & flutter', link: 'https://github.com/maxzod/readable' },
      { title: 'Validators', description: 'collection of validation methods and rules for flutter form with ZERO extra widgets', link: 'https://github.com/maxzod/queen_validators' },
      { title: 'Laravel Exception', description: 'parse laravel exceptions to dart classes', link: 'https://github.com/maxzod/laravel_exception' },
   ];

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
