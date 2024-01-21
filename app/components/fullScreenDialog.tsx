import React, {FC, ReactNode} from "react";

interface Props {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const FullScreenDialog: FC<Props> = ({ children, isOpen, onClose }) => {

    if (!isOpen) return null;

return (
    <div className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50">
      <button 
        className="absolute top-4 right-4 text-xl text-white "
        onClick={onClose}
      >
        X
      </button>
      {children}
    </div>
)
}
export default FullScreenDialog;
