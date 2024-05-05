<template>
  <nav
    class="w-full text-white bg-black px-4 sm:px-8 py-4 fixed top-0 my-0 flex justify-between items-center"
  >
    <div class="right_section flex gap-4 lg:gap-10 items-center">
      <div class="cursor-pointer block lg:hidden" @click="$emit('openMenu')">
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          ></path>
        </svg>
      </div>
      <img src="/images/Logo.png" alt="" />
      <ul class="list-none hidden lg:flex gap-6 text-white">
        <li class="cursor-pointer">Company Profile</li>
        <li class="cursor-pointer relative active h-full">
          Book a Ride
          <span
            class="w-1 h-1 bg-white rounded-full absolute -bottom-2 right-1/2"
          ></span>
        </li>
        <li class="cursor-pointer">Rides</li>
      </ul>
    </div>
    <div class="left_section hidden lg:flex divide-x">
      <div class="px-6">
        <div class="text-xs">Balance</div>
        <div>50,600.0 SAR</div>
      </div>
      <!-- <div class="flex gap-2 items-center px-6 cursor-pointer">
        <img src="/images/EllipseLogo.png" alt="" />
        <div class="flex flex-col gap-1">
          <span>Khuzimah A.</span>
          <span class="text-xs">Cabrio Co.</span>
        </div>
        <span>
          <svg
            class="w-4 h-4 text-white ml-10"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            ></path>
          </svg>
        </span>
      </div> -->
      <ProfileDropdown />
    </div>
  </nav>
</template>
<script setup>
import ProfileDropdown from '../common/ProfileDropdown.vue'
</script>