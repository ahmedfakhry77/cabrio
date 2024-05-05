<template>
  <div class="font-Outfit">
    <!-- start side menu for mobile -->
    <div class="overlay" v-if="openMenuForMobile"></div>
    <Menu @closeMenu="openMenuForMobile = false" v-if="openMenuForMobile" />
    <!-- end side menu  -->
    <!-- main layout  -->
    <AppHeader @openMenu="openMenuForMobile = true" />
    <div class="fixed top-24 px-0 sm:px-24">
      <BookRide
        @completePayment="openPayment = true"
        @openPickup="openPickup = true"
      />
    </div>
    <!-- start models components  -->
    <Payment v-if="openPayment" @closePayment="openPayment = false" />
    <Pickup v-if="openPickup" @closePickup="openPickup = false" />
    <!-- end models components  -->
  </div>
</template>
<script setup>
import { ref } from "vue";
import AppHeader from "./components/layout/AppHeader.vue";
import Menu from "./components/layout/Menu.vue";
import BookRide from "./components/BookRide.vue";
import Payment from "./components/models/Payment.vue";
import Pickup from "./components/models/Pickup.vue";
// models key open / close
const openPayment = ref(false);
const openPickup = ref(false);
const openMenuForMobile = ref(false);
</script>
