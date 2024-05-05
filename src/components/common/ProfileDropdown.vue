<template>
  <div class="relative">
    <button
      class="flex gap-2 items-center px-6"
      @click="isOptionsExpanded = !isOptionsExpanded"
      @blur="isOptionsExpanded = false"
    >
      <img src="/images/EllipseLogo.png" alt="" />
      <div class="flex flex-col gap-1 text-start">
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
    </button>
    <transition
      enter-active-class="transform transition duration-500 ease-custom"
      enter-class="-translate-y-1/2 scale-y-0 opacity-0"
      enter-to-class="translate-y-0 scale-y-100 opacity-100"
      leave-active-class="transform transition duration-500 ease-custom"
      leave-class="translate-y-0 scale-y-100 opacity-100"
      leave-to-class="-translate-y-1/2 scale-y-0 opacity-0"
    >
      <ul
        v-show="isOptionsExpanded"
        class="absolute right-0 top-16 mb-4 p-2 text-black bg-white rounded-lg shadow-lg overflow-hidden w-fit z-40"
      >
        <li
          class="px-2 py-4 transition-colors duration-300 hover:bg-gray-200 text-sm flex gap-2 items-center"
        >
        <img src="/images/setting.png" alt="" />
          <span class=" w-40">Profile Settings</span>
        </li>
        <li
          class="px-2 py-4 transition-colors duration-300 hover:bg-gray-200 text-sm flex gap-2 items-center"
        >
        <img src="/images/translate.png" class=" w-4 h-4" alt="" />
          <span>العربية</span>
        </li>
        <li class="pt-2">
          <button
            class="transition-colors py-2 duration-300 border rounded-md w-full text-center border-black text-sm"
          >
            Logout
          </button>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOptionsExpanded = ref(false);
</script>

<style scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}
</style>
