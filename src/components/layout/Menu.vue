<template>
  <div class="z-40 bg-black h-screen w-2/3 md:w-1/3 text-white font-bold menu py-4">
    <ul class="list-none flex flex-col divide-y text-white px-4">
      <li class="cursor-pointer flex py-4">
        <img src="/images/Logo.png" alt="" />
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="ms-auto w-6 h-6 cursor-pointer text-white"
          @click="$emit('closeMenu')"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          ></path>
        </svg>
      </li>
      <li class="cursor-pointer py-4">Profile Settings</li>
      <li class="cursor-pointer py-4">Company Profile</li>
      <li class="cursor-pointer relative py-4 active h-full">Book a Ride</li>
      <li class="cursor-pointer py-4">Rides</li>
      <li class="pt-2">
        <button
          class="transition-colors py-2 duration-300 border rounded-md w-full text-center border-white text-sm"
        >
          Logout
        </button>
      </li>
    </ul>
  </div>
</template>
<!-- <script setup>
import { getCurrentInstance } from "vue";

const instance = getCurrentInstance();
</script> -->