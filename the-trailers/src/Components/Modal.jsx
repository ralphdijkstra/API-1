import React, { useEffect } from "react";

export default function Modal({ show = false, children }) {
  return (
    <>
      {show && (
        <>
          <div
            className={`fixed inset-0 z-50 items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none`}
          >
            <div className="relative my-6 mx-auto w-full max-w-3xl rounded-lg bg-neutral-800">
              <div className="text-white">{children}</div>
            </div>
          </div>
          <div className={`opacity-50 fixed inset-0 z-40 bg-black`}></div>{" "}
        </>
      )}
    </>
  );
}
