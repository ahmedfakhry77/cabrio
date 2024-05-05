<template>
  <div class="flex justify-between items-center my-4">
    <div class="text-xl font-semibold">Select car class</div>
    <div></div>
  </div>
  <Carousel v-bind="settings" :breakpoints="breakpoints">
    <template #addons>
      <Navigation />
    </template>
    <Slide v-for="car in carClasses" :key="car.id" @click="selectClass(car.id)">
      <div
        class="text-start border rounded-lg mr-1 p-4 cursor-pointer"
        :class="[selectedCar === car.id ? 'border-black border-4' : '']"
      >
        <div
          class="car_image_box relative flex justify-center items-center py-8 px-4"
        >
          <img
            class="absolute top-0 right-0"
            src="/images/InfoCircle.png"
            alt=""
          />
          <img :src="car.image" alt="" class="h-16" />
        </div>

        <div class="text-lg font-semibold">{{ car.name }}</div>
        <div class="font-light">{{ car.discription }}</div>
        <div class="flex items-center gap-8">
          <div class="flex items-center gap-4">
            <img src="/images/User.png" alt="" />
            <span>{{ car.numberOfPassengers }}</span>
          </div>
          <div class="flex items-center gap-4">
            <img src="/images/Bag.png" alt="" />
            <span>X{{ car.numberOfBags }}</span>
          </div>
        </div>
        <div class="text-lg font-semibold mt-4">
          SAR <span class="mx-4">{{ car.price }}</span>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { ref, getCurrentInstance } from "vue";
const instance = getCurrentInstance();
const selectClass = (id)=> {
  selectedCar.value = id;
  instance.emit("changeClass", id);
}
const selectedCar = ref(null);
const settings = ref({
  itemsToShow: 1.5,
  snapAlign: "center",
});
const breakpoints = ref({
  // 700px and up
  768: {
    itemsToShow: 2.1,
    snapAlign: "center",
  },
});
const carClasses = ref([
  {
    id: 1,
    name: "Pure class",
    image: "./images/Pure.png",
    discription: "Lucid Air Dream",
    numberOfPassengers: 2,
    numberOfBags: 2,
    price: "850.50",
  },
  {
    id: 2,
    name: "Business Class",
    image: "./images/Business.png",
    discription: "Mercedes E450 Class",
    numberOfPassengers: 2,
    numberOfBags: 2,
    price: "240.00",
  },
  {
    id: 3,
    name: "Pure class",
    image: "./images/Pure.png",
    discription: "Lucid Air Dream",
    numberOfPassengers: 2,
    numberOfBags: 2,
    price: "850.50",
  },
  {
    id: 4,
    name: "Business Class",
    image: "./images/Business.png",
    discription: "Mercedes E450 Class",
    numberOfPassengers: 2,
    numberOfBags: 2,
    price: "240.00",
  },
]);
</script>
<style scoped>
.carousel__icon {
  width: var(--vc-icn-width);
  height: var(--vc-icn-width);
  fill: #fff;
}

.img {
  mix-blend-mode: multiply;
}
</style>
