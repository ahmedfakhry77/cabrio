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
              @click="$emit('closePayment')"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <div class="text-3xl font-semibold">Payment Method</div>
          <div class="text-sm text-gray-900 font-medium dark:text-gray-300 w-4/5 my-2">
            Please select payment method for your next request
          </div>
          <div class="flex flex-col  divide-y text-black font-bold">
            <div class="flex gap-2 py-4">
              <img class="w-6 h-6" src="/images/empty-wallet.png" alt="" />
              <span>Company Balance . SAR 20,450.00</span>
            </div>
            <div class="flex gap-2 py-4">
              <img class="w-6 h-6" src="/images/empty-wallet.png" alt="" />
              <span>My wallet . SAR 2,450.00</span>
            </div>
            <div class="flex gap-2 py-4">
              <img src="/images/visa.png" alt="" />
              <span class="text-lg">Visa . 5766</span>
              <img class="ms-auto w-6 h-6" src="/images/tick-circle.png" alt="" />
            </div>
            <div class="flex gap-2 py-4">
              <img class="w-6 h-6" src="/images/american.png" alt="" />
              <span>Amex . 5736</span>
            </div>
            <div class="flex gap-2 py-4">
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="w-6 h-6 text-black cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                ></path>
              </svg>
              <span>Add payment method</span>
            </div>
          </div>
    </div>
  </ModalComponent>
</template>
<script setup>
import ModalComponent from "./ModalComponent.vue";
</script>
