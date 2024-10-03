"use client";
import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  isOpen: boolean;
  modalContent: React.ReactNode | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null,
  );

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, isOpen, modalContent }}
    >
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex h-full w-4/5 flex-col items-center justify-center p-4">
            <div className="mx-auto rounded-lg bg-white">
              <div className="relative flex h-[2.375rem] w-full items-center justify-between border-b border-[#e6e6e6] px-[0.7rem] text-left">
                <h2 className="tracking[-0.4px] m-0 font-source-serif text-[18px] font-bold leading-[125%]">
                  Experiences
                </h2>
                <button className="text-gray" onClick={closeModal}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 48 48"
                      className="injected-svg icon icon-clickable"
                      data-src="/assets/shared/icons/close.svg"
                    >
                      <g clip-path="url(#clip0-711)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.878671 42.8788C-0.29289 44.0503 -0.29289 45.9499 0.878671 47.1214C2.05026 48.2929 3.94975 48.2929 5.12134 47.1214L24 28.2426L42.8788 47.1214C44.0503 48.2929 45.9499 48.2929 47.1214 47.1214C48.2929 45.9499 48.2929 44.0503 47.1214 42.8788L28.2426 24L47.1214 5.12134C48.2929 3.94975 48.2929 2.05026 47.1214 0.878671C45.9499 -0.29289 44.0503 -0.29289 42.8788 0.878671L24 19.7574L5.12134 0.878671C3.94975 -0.29289 2.05026 -0.29289 0.878671 0.878671C-0.29289 2.05026 -0.29289 3.94975 0.878671 5.12134L19.7574 24L0.878671 42.8788Z"
                          fill="#414141"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0-711">
                          <rect width="48" height="48" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </div>
              <div
                style={{ height: "calc(100% - 56px)" }}
                className="overflow-y-auto px-[7.25rem] py-[1rem]"
              >
                {modalContent}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Other global modals or tooltips can go here */}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
