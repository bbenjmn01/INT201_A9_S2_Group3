let changbg = document.querySelector("#changebg");
changbg.setAttribute("class", "flex items-center justify-center");

let btnLight = document.createElement("button");
btnLight.setAttribute("id", "light");
btnLight.setAttribute("type", "button");
btnLight.setAttribute(
  "class",
  "bg-gray-300 text-white hover:bg-purple-700 hover:text-white active:bg-purple-700 font-bold uppercase text-xs px-4 py-2 rounded-l outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
);
btnLight.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#000000">
                <rect fill="none" height="24" width="24" />
                <path
                    d="M15.5,22c1.05,0,2.05-0.16,3-0.46c-4.06-1.27-7-5.06-7-9.54s2.94-8.27,7-9.54C17.55,2.16,16.55,2,15.5,2 c-5.52,0-10,4.48-10,10S9.98,22,15.5,22L15.5,22z" />
            </svg>`;

let btnDark = document.createElement("button");
btnDark.setAttribute("id", "dark");
btnDark.setAttribute("type", "button");
btnDark.setAttribute(
  "class",
  "bg-gray-300 text-white hover:bg-purple-700 hover:text-white active:bg-purple-700 font-bold uppercase text-xs px-4 py-2 rounded-r outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
);
btnDark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                width="24px" fill="#FFFFFF">
                <rect fill="none" height="24" width="24" />
                <path
                    d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
            </svg>`;

changbg.appendChild(btnLight);
changbg.appendChild(btnDark);
