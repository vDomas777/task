<template>
  <div class="flex flex-col pt-8">
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-1/2">
        <form-label for="firstName" label="First Name" />
        <custom-input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          required
        />
      </div>
      <div class="w-1/2">
        <form-label for="lastName" label="Last Name" />
        <custom-input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          required
        />
      </div>
    </div>
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-1/2">
        <form-label for="email" label="Email" />
        <custom-input
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          required
        />
      </div>
      <div class="w-1/2 relative">
        <form-label for="country" label="Country" />
        <country-input @clicked="setData" />
      </div>
    </div>
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-1/2">
        <form-label for="address" label="Address" />
        <custom-input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          required
        />
      </div>
      <div class="w-1/2">
       
      </div>
    </div>
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-full px-32 md:px-0 py-2 md:py-0 md:w-1/2">
        <submit-button title="Create User" />
      </div>
    </div>
  </div>
</template>
<script>
import FormLabel from "@/components/forms/Label.vue";
import CustomInput from "@/components/forms/CustomInput.vue";
import CountryInput from "@/components/forms/CountryInput.vue"
import SubmitButton from "@/components/forms/SubmitButton.vue"
export default {
  data() {
      return {
          country: null
      }
  },
  components: {
    FormLabel,
    CustomInput,
    CountryInput,
    SubmitButton
  },
  methods: {
      setData(data) {
          this.country = data;
      }
  }
};
</script>
