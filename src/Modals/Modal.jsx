/* eslint-disable react/prop-types */

import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
function Modal({
  children,
  active,
  setActive,
  agreement,
  height = "728px",
  pr,
  opened,
  setOpened,
  className,
  setReg,
}) {
  useEffect(() => {
    document.body.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        close();
      }
    });
  }, []);

  useEffect(() => {
    if (opened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [opened]);

  function close() {
    setOpened(false);
    if (setReg) setReg(false);
  }

  return (
    <div
      className={`fixed z-[51] top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.25)] transition-all flex justify-center items-center ${
        opened ? "" : "pointer-events-none opacity-0 max-[665px]:bg-transparent"
      } max-[665px]:items-end max-[665px]:opacity-100`}
    >
      <div
        className="absolute w-full h-full top-0 left-0"
        onClick={close}
      ></div>
      <div
        className={`flex-col transition-all ${
          agreement
            ? `w-[682px] h-[${height}] max-[665px]:w-full`
            : `w-[464px] max-[665px]:w-full`
        } ${className} ${
          opened
            ? ""
            : "translate-y-10 max-[665px]:translate-y-[120%] min-[665px]:scale-90"
        }`}
      >
        {!agreement && (
          <div className="flex justify-start">
            <p
              onClick={() => setActive(true)}
              className={`relative z-[2] flex items-center justify-center font-bold text-[18px] backdrop-blur-[40px] leading-[156%] rounded-tl-[10px] w-[146px] h-[62px] ${
                !active
                  ? "hover:cursor-pointer bg-[rgba(255,255,255,.3)]"
                  : "bg-white hover:cursor-default text-[#1CBBEE]"
              }`}
            >
              Физ. лицо
            </p>
            <p
              onClick={() => setActive(false)}
              className={`relative z-[1] flex items-center justify-end pr-[28px] font-bold text-[18px] backdrop-blur-[40px] leading-[156%] rounded-tr-[10px]  h-[62px] ${
                !active
                  ? " bg-white text-center hover:cursor-default text-[#1CBBEE] w-[146px] left-0"
                  : "cursor-pointer bg-[#a6a6a6] bg-[rgba(255,255,255,.3)] w-[163px] -left-[17px]"
              }`}
            >
              Юр. лицо
            </p>
          </div>
        )}

        <div
          className={`relative bg-white px-[clamp(16px,1.8vw,28px)] pt-9 pb-[42px] ${
            agreement
              ? `rounded-ss-[20px]  h-[${height}] pr-[${pr}]}`
              : `rounded-ss-none`
          } rounded-e-[20px] rounded-bl-[20px] max-h-[95vh] max-[665px]:rounded-b-[0]`}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:cursor-pointer absolute top-[12px] right-[13px] max-[665px]:hidden"
            onClick={close}
          >
            <path
              d="M10.9423 20C6.89587 20.0024 3.24681 17.5659 1.69798 13.8276C0.149155 10.0893 1.00586 5.78606 3.86832 2.92598C6.39561 0.398683 10.0792 -0.588338 13.5316 0.336716C16.9839 1.26177 19.6805 3.95836 20.6056 7.41072C21.5306 10.8631 20.5436 14.5467 18.0163 17.074C16.1438 18.955 13.5965 20.0086 10.9423 20ZM2.94232 10.172C2.98963 14.5732 6.58343 18.1095 10.9849 18.086C15.3863 18.0622 18.9419 14.4875 18.9419 10.086C18.9419 5.68449 15.3863 2.10975 10.9849 2.08598C6.58343 2.06244 2.98963 5.59874 2.94232 9.99998V10.172ZM8.35132 14L6.94232 12.59L9.53232 9.99998L6.94232 7.40998L8.35232 5.99998L10.9423 8.58998L13.5323 5.99998L14.9423 7.40998L12.3523 9.99998L14.9423 12.59L13.5333 14L10.9423 11.41L8.35232 14H8.35132Z"
              fill="#A8A8A8"
            />
          </svg>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
