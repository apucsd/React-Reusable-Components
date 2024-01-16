import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";
const ModelContext = createContext<TModelContext | null>(null);
type TModel = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
type TModelContext = {
  onClose: () => void;
};
type TCloseButton = {
  children?: ReactNode;
};
type THeader = TCloseButton;

const Model = ({ isOpen, onClose, children }: TModel) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleCloseOutside = (e: MouseEvent) => {
    // console.log("e.target=>", e.target);
    // console.log("ref=>", containerRef.current);
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModelContext.Provider value={{ onClose }}>
      <>
        {isOpen && (
          <div
            onClick={handleCloseOutside}
            className={cn(
              "fixed inset-0 flex  justify-center items-center invisible z-[999] bg-gray-500/70",
              {
                visible: isOpen,
              }
            )}
          >
            <div
              ref={containerRef}
              className="bg-white max-w-sm mx-auto rounded-md p-3"
            >
              {children}
            </div>
          </div>
        )}
      </>
    </ModelContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModelContext) as TModelContext;
  return (
    <button className="ml-auto" onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 bg-red-500 rounded-md text-white p-0.5 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};
const Header = ({ children }: THeader) => {
  return (
    <div className="w-full flex gap-3 justify-around items-center  mb-5">
      {children}
    </div>
  );
};

Model.CloseButton = CloseButton;
Model.Header = Header;
export default Model;
