interface ModalInterface {
  open: boolean;
  onClose: any;
  children: JSX.Element;
}

function Modal({
  open,
  onClose,
  children,
}: ModalInterface): JSX.Element | null {
  return open ? (
    <div
      onClick={onClose}
      className="absolute top-0 left-0 w-full h-[100dvh] backdrop-brightness-50 z-10 flex items-center justify-center"
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  ) : null;
}

export default Modal;
