import { useState } from "react";
import { Modal } from "../Modal/Modal";


export function Button() {
    const [show, setShow] = useState(false);

    const OpenModal = () => {
        setShow(true);
    }

    const closeModal = () => {
        setShow(false);
    }

    return (
        <>
            <button className='inline-flex w-full justify-center rounded-md border-solid border-2 border-green-600 px-3 py-2 text-sm font-semibold text-green-500 shadow-sm ring-1 ring-inset ring-cyan-200 hover:bg-green-500 hover:text-white sm:ml-3 sm:w-auto' onClick={OpenModal}>
                ADICIONAR
            </button>
            {show ? <Modal onClose={() => closeModal()} /> : null}
        </>
    )
}


