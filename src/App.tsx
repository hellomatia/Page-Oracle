// App.tsx
import React from 'react';
import Book from './components/Book';

const App: React.FC = () => {
    return (
        <div>
            <h1>Ask Anything</h1>
            <Book/>
        </div>
    );
};

export default App;
