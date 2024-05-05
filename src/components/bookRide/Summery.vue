<template>
  <div class="text-xl font-semibold">Summery</div>
  <div
    class="flex justify-between items-center my-2"
    v-for="item in rows"
    :key="item.id"
  >
    <div
      class=" text-sm  text-gray-900 font-medium dark:text-gray-300"
      :class="[item.title == 'Total' ? 'text-black font-bold' : '']"
    >
      {{ item.title }}
    </div>

    <div class="font-medium" :class="[item.title == 'Total' ? 'text-black font-bold' : '']">{{ item.price }}</div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const rows = ref([
  {
    id: 1,
    title: "Services cost",
    price: "SAR 450.0",
  },
  {
    id: 2,
    title: "Additions fees",
    price: "SAR 2,000.0",
  },
  {
    id: 3,
    title: "VAT",
    price: "SAR 100.0",
  },
  {
    id: 4,
    title: "Total",
    price: "SAR 2,450.0",
  },
]);
</script>
