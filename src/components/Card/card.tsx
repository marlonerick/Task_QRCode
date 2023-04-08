import QRCODE from '../../assets/image-qr-code.png'

export function Card() {
    return (
        <>
            <div className='w-80 h-2/2 rounded-2xl bg-slate-100 px-4 py-4 border-solid border-2 border-zinc-300
            vsm:w-72 vsm:m-6 vsm:p-4'>
                <img src={QRCODE} className='rounded-xl' />

                <div className='flex flex-col justify-center items-center px-4 py-4'>
                    <h2 className='text-lg text-center my-1 font-bold font-sans'>Improve your front-end skills by building projects</h2>
                    <h3 className='text-sm text-center my-1 text-gray-500 font-extralight'>Scan the QR code to visit Frontend Mentor and take your coding skills to next level</h3>
                </div>
            </div>

        </>
    )
}


