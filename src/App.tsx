// App.tsx
import React from 'react';
import Book from './components/Book';

const App: React.FC = () => {
    return (
        <div>
            <div className={'titleContainer'}><h1>Ask Anything</h1></div>
            <Book/>
        </div>
    );
};

export default App;
