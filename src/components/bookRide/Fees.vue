<template>
  <div class="w-full text-end text-[#898989]">Fees</div>
  <div
    class="flex justify-between items-center my-2"
    v-for="item in rows"
    :key="item.id"
  >
    <div class="flex items-center">
      <input
        :id="item.id"
        type="checkbox"
        class="w-4 h-4 text-black bg-[#c6c6c6] border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />

      <label
        :for="item.id"
        class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {{ item.title }}
      </label>
      <img class="mx-2 cursor-pointer" src="/images/InfoCircle.png" alt="" />
    </div>

    <div class=" font-medium">{{ item.price }}</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const rows = ref([
  {
    id: 1,
    title: "Name-Board",
    price: "SAR 0.0",
    showInfo: true,
  },
  {
    id: 2,
    title: "Child's seat",
    price: "SAR 130.0",
    showInfo: false,
  },
  {
    id: 3,
    title: "Altanfithi Accsess",
    price: "SAR 2,000.0",
    showInfo: false,
  },
  {
    id: 4,
    title: "Additional car for luggages",
    price: "SAR 250.0",
    showInfo: true,
  },
]);
</script>
