import React, {ReactNode, useImperativeHandle, useRef, useState, forwardRef, ForwardedRef} from "react";


const Modal = forwardRef(function Modal(children:ReactNode, ref:ForwardedRef<HTMLDialogElement>) {

    const [open, setOpen] = useState(false);
    const innerRef = useRef();

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <dialog ref={ref} open={open}
            className="absolute border-none rounded-md drop-shadow-lg p-0
                top-1/2 left-1/2 transform -translate-x-1/2
                -translate-y-1/2 w-90 right-0 md:max-w-screen-md h-full lg:h-min"
            id="movieDetailDialog">
            {children}
        </dialog>
    )
})

export default Modal;