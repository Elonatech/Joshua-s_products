import React from 'react'

const Input = () => {
  return (
    
      <div class="inline-flex items-center">
        <label
          class="relative flex items-center p-3 rounded-full cursor-pointer"
          htmlFor="customStyle"
        >
          <input
            type="checkbox"
            class="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-orange-500 bg-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-white before:opacity-0 before:transition-opacity checked:border-orange-500 checked:bg-orange-500 checked:before:bg-white hover:scale-105 hover:before:opacity-0"
            id="customStyle"
          />
          <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
      </div>

  );
}

export default Input