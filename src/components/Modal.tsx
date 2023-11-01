import React, {ReactNode, forwardRef, useRef} from "react";

type TModalProps = {
    children: ReactNode
}

const Modal = forwardRef<HTMLDialogElement, TModalProps>(function Modal(props, ref) {
    const { children } = props

    const dialogRef = useRef<HTMLDialogElement>(null);

    return(
        <dialog ref={ref}
                className="absolute border-none rounded-md drop-shadow-lg p-0
                top-1/2 left-1/2 transform -translate-x-1/2
                -translate-y-1/2 w-90 right-0 md:max-w-screen-md h-full lg:h-min"
                id="movieDetailDialog">
            {children}
        </dialog>
    )
})

export default Modal;