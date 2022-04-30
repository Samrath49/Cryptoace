import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Notification = ({ props }) => {
  const [view, setView] = useState(true);

  const close = () => {
    setView(false);
  };

  if (props.timerValue) {
    useEffect(() => {
      const timer = setTimeout(() => {
        close();
      }, props.timerValue);
      return () => clearTimeout(timer);
    }, []);
  }

  const notificationToast = (type, message) => {
    if (type === 1 && view) {
      return (
        <>
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-slate-200 bg-green-700 rounded-lg">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </>
      );
    }

    if (type === 2 && view) {
      return (
        <>
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-slate-200 bg-yellow-600 rounded-lg">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </>
      );
    }

    if (type === 3 && view) {
      return (
        <>
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-slate-200 bg-red-700 rounded-lg">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </>
      );
    }
  };

  return ReactDOM.createPortal(
    <>
      {view && (
        <section
          className={`absolute right-10 top-28 animate-fade-in-up antialiased`}
        >
          <div
            id="toast-notification"
            className={`relative flex items-center w-full max-w-xs p-5
              backdrop-blur-sm bg-gradient-to-br ${
                props.type === 3
                  ? "from-red-900/60"
                  : props.type === 2
                  ? "from-yellow-800/70"
                  : "from-green-900/90"
              }   via-slate-800/80 to-transparent
              text-slate-300 rounded-lg shadow-x`}
            role="alert"
          >
            {notificationToast(props.type)}
            <div className="font-medium antialiased tracking-wide p-2">
              {props.message}
            </div>
            <button
              type="button"
              className="text-red-700 rounded-lg p-1 transition duration-300 hover:bg-red-800 hover:text-slate-300"
              data-collapse-toggle="toast-warning"
              aria-label="Close"
              onClick={() => {
                close();
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </section>
      )}
    </>,
    document.getElementById("notification")
  );
};

export default Notification;
