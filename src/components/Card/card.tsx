import { useRef, useState } from 'react';
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

export function Card() {

    const [url, setUrl] = useState('https://github.com/marlonerick');

    return (
        <>
            <div className='w-80 h-2/2 rounded-3xl bg-slate-100 px-4 py-4 border-solid border-2 border-zinc-300
            2xl::w-80 2xl:2/4
            '>
                <div className='bg-blue-700 h-72 rounded-3xl px-14 py-14 flex flex-col justify-center items-center'>
                    <QRCode size={256} value={url} bgColor='#FFF' level='H' />
                </div>
                <div className='flex flex-col justify-center items-center px-4 py-4'>
                    <p className='text-xs text-center my-1 font-bold font-sans'>ADICIONE URL</p>
                    <input className='w-64 rounded-md border-solid border-2 px-2 py-1 m-1 border-slate-200 placeholder-slate-200 contrast-more:border-slate-200 contrast-more:placeholder-slate-300 '
                        type="text"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <h2 className='text-lg text-center my-1 font-bold font-sans'>Melhore suas habilidades de front-end criando projetos</h2>
                    <h3 className='text-sm text-center my-1 text-gray-500 font-medium font-serif'>Escaneie o código QR para ver este desafio no meu Github Marlon Erick, sugerido pelo Frontend Mentor e leve suas habilidades de codificação para o próximo nível</h3>
                </div>

            </div>

        </>
    )
}


