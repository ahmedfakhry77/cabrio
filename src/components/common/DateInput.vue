<template>
  <div class="p-2">
    <v-date-picker v-model="date" title-position="left">
      <template v-slot="{ inputValue, togglePopover }">
        <div
          @click="togglePopover()"
          class="flex items-center justify-between w-full"
        >
          <div class="font-semibold flex flex-col">
            <span>Trip Date</span>
            <span>{{ inputValue }}</span>
          </div>

          <svg
            class="w-6 h-6"
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
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            ></path>
          </svg>
        </div>
      </template>
      <template #footer>
        <div class="w-full px-4 pb-3">
          <button
            class=" py-2 bg-black text-white  duration-300 border rounded-md w-full text-center border-black text-sm"
            @click="moveToday();"
          >
            Today
          </button>
        </div>
      </template>
    </v-date-picker>
  </div>
</template>

<script setup>
import { ref , watch , getCurrentInstance } from "vue";
const date = ref(null);

function moveToday() {
  date.value = new Date();
}
const instance = getCurrentInstance();
watch(date, (newValue) => {
  instance.emit("setOption", newValue);
});
</script>
