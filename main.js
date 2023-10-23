import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

// document.querySelector("#app").innerHTML = `
//   <div class="">
//     <div class="flex gap-1">
//       <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//       </a>
//       <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//       </a>
//       <div class="card">
//       <button id="counter" type="button"></button>
//       </div>
//     </div>
//   </div>
// `;

window.addEventListener("load", () => {
  document.querySelectorAll(".info-widget").forEach((widget) => {
    const heading = widget.querySelector(".info-widget-heading").innerText;
    const content = widget.querySelector(".info-widget-content").innerText;
    const type = widget
      .querySelector(".widget-type")
      .innerText.toLowerCase()
      .trim();
    console.log(type);

    if (type === "warn") {
      widget.innerHTML = components.warn(heading, content);
    } else if (type === "danger") {
      widget.innerHTML = components.danger(heading, content);
    } else if (type === "info") {
      widget.innerHTML = components.info(heading, content);
    } else {
      widget.innerHTML = components.info(heading, content);
    }
  });
});

export const components = {
  info: (heading, content) => `
  <div
  class="mx-2 my-5 flex w-full max-w-5xl overflow-hidden rounded-xl hover:bg-blue-50/40 p-3 py-6 shadow-xl shadow-blue-300/30 backdrop-blur transition-all duration-500 hover:scale-105 hover:px-4 break-words bg-gradient-to-tr from-blue-100 via-blue-50 to-blue-100"
>
  <div class="mx-auto flex w-11/12 flex-col gap-1">
    <span
      class="flex items-center gap-1 text-2xl font-bold text-blue-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-8 w-8 animate-pulse"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
      ${heading}
    </span>
    <span
      class="mx-2 overflow-hidden break-words text-sm text-gray-600 sm:mx-4"
    >
      ${content}
    </span>
  </div>
</div>
  `,
  warn: (heading, content) => `
  <div
    class="mx-2 my-5 flex w-full overflow-hidden rounded-xl bg-gradient-to-tr from-yellow-100 via-yellow-50 to-yellow-100 p-3 py-6 text-white shadow-xl shadow-yellow-100 backdrop-blur transition-all duration-500 hover:scale-105 hover:px-4 break-words max-w-5xl"
  >
    <div class="mx-auto flex w-11/12 flex-col gap-1">
      <span
        class="flex items-center gap-1 text-2xl font-bold text-yellow-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8 animate-pulse"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
        ${heading}</span
      >
      <span
        class="mx-2 overflow-hidden break-words text-sm text-gray-700 sm:mx-4"
      >
        ${content}
      </span>
    </div>
  </div>
  `,
  danger: (heading, content) => `
  <div
        class="mx-2 my-5 flex w-full max-w-5xl overflow-hidden rounded-xl bg-gradient-to-tr from-red-100 via-red-50 to-red-100 p-3 py-6 text-white shadow-xl shadow-red-100 backdrop-blur transition-all duration-500 hover:scale-105 hover:px-4 break-words"
      >
        <div class="mx-auto flex w-11/12 flex-col gap-1">
          <span class="flex items-center gap-1 text-2xl font-bold text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-8 w-8 animate-pulse"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              />
            </svg>
            ${heading}</span
          >
          <span
            class="mx-2 overflow-hidden break-words text-sm text-gray-700 sm:mx-4"
          >
            ${content}
          </span>
        </div>
      </div>
  `,
};

setupCounter(document.querySelector("#counter"));
