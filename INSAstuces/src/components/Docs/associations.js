import React from 'react';

export const Balisetest = ({children, color}) => (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        color: '#fff',
        padding: '0.2rem',
      }}>
      {children}
    </span>
  );
// Je ne sais pas comment créer et importer des composants depuis des fichiers md. 
// Pour le moment, ils seront créés directement dans les fichiers mdx