<template>
  <div
    class="w-screen max-w-full sm:max-w-[480px] rounded-xl bg-white shadow-xl p-4 transform transition-all duration-500 ease-in-out"
  >
    <h1 class="text-3xl font-semibold mb-4">Book a Ride</h1>
    <DropdownComponent
      label="Select type of ride"
      header="Ride type"
      :options="RideTypes"
      @changeFilter="changeRideType"
    />
    <span v-if="RideTypeErrorMessage" class="text-red-600 text-xs px-2">{{
      RideTypeErrorMessage
    }}</span>
    <div
      v-if="RideType"
      class="space-y-3 py-3 max-h-[45vh] scrollbar overflow-y-scroll my-2 pr-1"
    >
      <div class="flex items-center">
        <input
          id="black-checkbox"
          type="checkbox"
          v-model="anotherPerson"
          class="w-4 h-4 text-black bg-[#f6f6f6] border-gray-300 rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />

        <label
          for="black-checkbox"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          This ride book for another person
        </label>
      </div>
      <DropdownComponent
        label="Select airport"
        header="From"
        :showHeader="true"
        :options="airports"
        @changeFilter="changeAirport"
      />
      <span v-if="AirportErrorMessage" class="text-red-600 text-xs px-2">{{
        AirportErrorMessage
      }}</span>
      <div
        @click="$emit('openPickup')"
        class="flex items-center cursor-pointer justify-between px-5 py-2 bg-[#f6f6f6] w-full rounded-lg border active:border-black hover:border-black"
      >
        <span class="text-sm mx-1 flex flex-col items-start">
          <span class="font-semibold"> To </span>
          <span class="font-semibold">
            Al Thoumamah Rd, An Narjis, Uthman ..
          </span>
        </span>
        <img src="/images/Mappin.png" alt="" />
      </div>
      <div
        class="grid grid-cols-2 px-5 border gap-4 divide-x bg-[#f6f6f6] rounded-md text-xs"
      >
        <DateInput @setOption="changeDate" />
        <TimeInput @setOption="changeTime" />
      </div>
      <div class="grid grid-cols-2 px-5 gap-4">
        <span v-if="RideDateErrorMessage" class="text-red-600 text-xs px-2">{{
          RideDateErrorMessage
        }}</span>
        <span v-if="RideTimeErrorMessage" class="text-red-600 text-xs px-2">{{
          RideTimeErrorMessage
        }}</span>
      </div>

      <div class="relative">
        <input
          type="text"
          id="floating_filled"
          v-model="flightNumber"
          class="block border font-light rounded-md px-5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#f6f6f6] peer"
          placeholder="Enter flight number"
          @input="validateField('flightNumber', flightNumber)"
        />
        <label
          for="floating_filled"
          class="absolute text-sm font-bold text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >Flight number</label
        >
        <span v-if="FlightNumberErrorMessage" class="text-red-600 text-xs px-2">{{
          FlightNumberErrorMessage
        }}</span>
      </div>
      <div>
        <CarouselComponent @changeClass="SelectClass" />
        <span v-if="CalssIdErrorMessage" class="text-red-600 text-xs px-2">{{ CalssIdErrorMessage }}</span>
      </div>
      <div class="px-1">
        <Fees />
      </div>
      <div class="relative">
        <textarea
          id="comment"
          rows="4"
          class="block border font-light rounded-md px-5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-[#f6f6f6] peer"
          placeholder="Luggage information, special needs or tasks for driver"
        />
        <label
          for="comment"
          class="absolute text-black duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-5 peer-focus:text-black peer-placeholder-shown:scale-75 peer-placeholder-shown:-translate-y-3 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto font-semibold"
          >A special comment</label
        >
      </div>
      <div class="px-1">
        <Summery />
      </div>
    </div>
    <div class="mt-12">
      <div class="w-full flex justify-between items-center my-2">
        <span>Payment Method</span>
        <span class="font-bold flex items-center gap-2"
          >Balance . SAR 20,450.00
          <svg
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="w-4 h-4 cursor-pointer text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </span>
      </div>
      <button
        @click="payment"
        :disabled="!isFormValid"
        :class="[isFormValid ? 'bg-black text-white': 'bg-[#f6f6f6] text-[#c2c2c2]']"
        class="w-full text-center  rounded-md p-2"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted ,computed} from "vue";
import * as Yup from "yup";
import { useToast } from "vue-toastification";
import DropdownComponent from "./common/DropdownComponent.vue";
import TimeInput from "./common/TimeInput.vue";
import DateInput from "./common/DateInput.vue";
import CarouselComponent from "./common/CarouselComponent.vue";
import Fees from "./bookRide/Fees.vue";
import Summery from "./bookRide/Summery.vue";
const RideTypes = ref([
  { name: "Airport Pickup", id: 1 },
  { name: "Airport Drop-off", id: 2 },
  { name: "For a Day", id: 3 },
  { name: "By Hours", id: 4 },
  { name: "City to city", id: 5 },
]);
const airports = ref([
  {
    name: "Riyadh (RUH) ",
    id: 1,
    discription: "King Fahd International Airport",
  },
  {
    name: "Jeddah (JED) ",
    id: 2,
    discription: "King Abdulaziz International Airport",
  },
  {
    name: "Dammam (DMM)",
    id: 3,
    discription: "King Fahd International Airport Dammam",
  },
]);
const RideType = ref(null);
const Airport = ref(null);
const RideDate = ref("");
const RideTime = ref("");
const flightNumber = ref(null);
const anotherPerson = ref(false);
const CalssId = ref(null);
const toast = useToast();
const RideTypeErrorMessage = ref("");
const AirportErrorMessage = ref("");
const RideDateErrorMessage = ref("");
const RideTimeErrorMessage = ref("");
const FlightNumberErrorMessage = ref("");
const CalssIdErrorMessage = ref("");
const schema = Yup.object().shape({
  RideType: Yup.string().required("*Ride type is required"),
  Airport: Yup.string().required("*Airport is required"),
  RideDate: Yup.string().required("*Ride date is required"),
  RideTime: Yup.string().required("*Ride time is required"),
  flightNumber: Yup.string().required("*Flight Number is required"),
  CalssId: Yup.string().required("*Class type is required"),
});
const changeRideType = (ride) => {
  RideType.value = ride.id;
  validateField("RideType", ride.id);
};
const changeAirport = (airport) => {
  Airport.value = airport.id;
  validateField("Airport", airport.id);
};
const changeTime = (time) => {
  RideTime.value = time;
  validateField("RideTime", time);
};
const SelectClass = (id) => {
  CalssId.value = id;
  validateField("CalssId", id);
};
const changeDate = (date) => {
  RideDate.value = date;
  validateField("RideDate", date);
};
const instance = getCurrentInstance();
const payment = () => {
  // Validate
  schema
    .validate({
      RideType: RideType.value,
      Airport: Airport.value,
      RideDate: RideDate.value,
      RideTime: RideTime.value,
      flightNumber: flightNumber.value,
      CalssId: CalssId.value,
    })
    .then(() => {
      instance.emit("completePayment");
    })
    .catch((error) => {
      toast.error(error.errors[0], {
        // You can customize the toast options here
        position: "top-right",
        timeout: 3000, // 3 seconds
      });
      console.error("Validation error:", error.errors);
    });
};

const validateField = (fieldName, value) => {
  schema
    .validateAt(fieldName, { [fieldName]: value })
    .then(() => {
      // Field is valid, clear error message
      switch (fieldName) {
        case "RideType":
          RideTypeErrorMessage.value = "";
          break;
        case "Airport":
          AirportErrorMessage.value = "";
          break;
        case "RideDate":
          RideDateErrorMessage.value = "";
          break;
        case "RideTime":
          RideTimeErrorMessage.value = "";
          break;
        case "flightNumber":
          FlightNumberErrorMessage.value = "";
          break;
        case "CalssId":
          CalssIdErrorMessage.value = "";
          break;
      }
    })
    .catch((error) => {
      // Field is invalid, set error message
      switch (fieldName) {
        case "RideType":
          RideTypeErrorMessage.value = error.errors[0];
          break;
        case "Airport":
          AirportErrorMessage.value = error.errors[0];
          break;
        case "RideDate":
          RideDateErrorMessage.value = error.errors[0];
          break;
        case "RideTime":
          RideTimeErrorMessage.value = error.errors[0];
          break;
        case "flightNumber":
          FlightNumberErrorMessage.value = error.errors[0];
          break;
        case "CalssId":
          CalssIdErrorMessage.value = error.errors[0];
          break;
      }
    });
};
const isFormValid = computed(() => {
  return (
    !RideTypeErrorMessage.value &&
    !AirportErrorMessage.value &&
    !RideDateErrorMessage.value &&
    !RideTimeErrorMessage.value &&
    !FlightNumberErrorMessage.value &&
    !CalssIdErrorMessage.value
  );
});
onMounted(() => {
  validateField("RideType", RideType.value);
  validateField("Airport", Airport.value);
  validateField("RideDate", RideDate.value);
  validateField("RideTime", RideTime.value);
  validateField("flightNumber", flightNumber.value);
  validateField("CalssId", CalssId.value);
});
</script>
