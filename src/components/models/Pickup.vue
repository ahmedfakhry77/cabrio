<template>
  <ModalComponent>
    <div class="p-4 text-start">
      <div class="mb-2">
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="w-6 h-6 text-black cursor-pointer"
          @click="$emit('closePickup')"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          ></path>
        </svg>
      </div>
      <div class="text-3xl font-semibold px-2">Select Pickup location</div>
      <div class="w-full">
        <img class="w-full" src="/images/pickup.png" alt="" />
        <div class="px-2 pb-2">
            <button
          class="transition-colors py-2 bg-black text-white mt-2 duration-300 border rounded-md w-full text-center border-black text-sm"
        >
          Select
        </button>
        </div>
      </div>
    </div>
  </ModalComponent>
</template>
<script setup>
import ModalComponent from "./ModalComponent.vue";
</script>
