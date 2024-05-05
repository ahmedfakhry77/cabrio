<template>
  <div class="relative flex justify-between items-center p-2">
    <div class="flex flex-col">
      <label for="first" class="font-semibold ">Trip Time</label>
      <input
        type="time"
        id="session-time"
        @change="changeTime(SelectedTime)"
        v-model="SelectedTime"
        class=" bg-[#f6f6f6]"
      />
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
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      ></path>
    </svg>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance } from "vue";
const SelectedTime = ref(null);

const instance = getCurrentInstance();

const changeTime = (time) => {
  instance.emit("setOption", time);
};
</script>
<style scoped>
.ease-custom {
  transition-timing-function: cubic-bezier(0.61, -0.53, 0.43, 1.43);
}

input#session-time {
  display: inline-block;
  position: relative;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}
</style>
