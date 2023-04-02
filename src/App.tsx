import { useState } from 'react';
import { Card } from './components/Card/card';
import './styles/global.css';


export function App() {

    const [url, setUrl] = useState('');

    function handleUrlChange(newUrl: string) {
        setUrl(newUrl);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-cyan-200">
            <Card />
        </div>
    )
}