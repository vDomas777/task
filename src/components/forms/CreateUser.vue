<template>
  <div class="flex flex-col pt-8">
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-1/2">
        <div class="flex justify-between flex-col sm:flex-row">
          <form-label for="firstName" label="First Name" />
          <p
            class="text-red-500 text-xd font-thin"
            v-for="error of v$.user.firstName.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <custom-input
          type="text"
          name="firstName"
          id="firstName"
          @input="(e) => (user.firstName = e.target.value)"
          placeholder="First Name"
        />
      </div>
      <div class="w-1/2">
        <div class="flex justify-between flex-col sm:flex-row">
          <form-label for="lastName" label="Last Name" />
          <p
            class="text-red-500 text-xd font-thin"
            v-for="error of v$.user.lastName.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <custom-input
          type="text"
          name="lastName"
          id="lastName"
          @input="(e) => (user.lastName = e.target.value)"
          placeholder="Last Name"
        />
      </div>
    </div>
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-1/2">
        <div class="flex justify-between flex-col sm:flex-row">
          <form-label for="email" label="Email" />
          <p
            class="text-red-500 text-xd font-thin"
            v-for="error of v$.user.email.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <custom-input
          type="email"
          name="email"
          id="email"
          @input="(e) => (user.email = e.target.value)"
          placeholder="email@example.com"
        />
      </div>
      <div class="w-1/2 relative">
        <div class="flex justify-between flex-col sm:flex-row">
          <form-label for="country" label="Country" />
          <p
            class="text-red-500 text-xd font-thin"
            v-for="error of v$.user.country.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <country-input
          @clicked="setData"
          @clear="clearData"
          :class="v$.user.country.$error === true ? 'border-red-500' : ''"
        />
      </div>
    </div>
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-1/2">
        <div class="flex justify-between flex-col sm:flex-row">
          <form-label for="address" label="Address" />
          <p
            class="text-red-500 text-xd font-thin"
            v-for="error of v$.user.address.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p>
        </div>
        <custom-input
          type="text"
          name="address"
          id="address"
          @input="(e) => (user.address = e.target.value)"
          placeholder="Address"
          required
        />
      </div>
      <div class="w-1/2"></div>
    </div>
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-full px-4 sm:px-32 md:px-0 py-2 md:py-0 md:w-1/2">
        <submit-button title="Create User" @click="submitForm" />
      </div>
    </div>
  </div>
</template>
<script>
import FormLabel from "@/components/forms/Label.vue";
import CustomInput from "@/components/forms/CustomInput.vue";
import CountryInput from "@/components/forms/CountryInput.vue";
import SubmitButton from "@/components/forms/SubmitButton.vue";
import useVuelidate from "@vuelidate/core";
import { store } from "@/store.js";
import { required, email, helpers, minLength } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useVuelidate(),
      users: store.users,
      user: {
        firstName: null,
        lastName: null,
        email: null,
        address: null,
        country: null,
      },
    };
  },
  validations() {
    return {
      user: {
        firstName: {
          required: helpers.withMessage("First Name is required", required),
          minLength: minLength(4),
          $autoDirty: true,
        },
        lastName: {
          required: helpers.withMessage("Last Name is required", required),
          minLength: minLength(4),
          $autoDirty: true,
        },
        email: {
          required: helpers.withMessage("Email is required", required),
          email,
          $autoDirty: true,
        },
        address: {
          required: helpers.withMessage("Address is required", required),
          minLength: minLength(10),
          $autoDirty: true,
        },
        country: {
          required: helpers.withMessage("Country is required", required),
          $autoDirty: true,
        },
      },
    };
  },
  components: {
    FormLabel,
    CustomInput,
    CountryInput,
    SubmitButton,
  },
  methods: {
    setData(data) {
      this.user.country = data;
    },
    clearData(data) {
      this.user.country = data;
    },
    async submitForm() {
      const result = await this.v$.$validate();
      if (!result) {
        //
        return;
      }
      this.users.push({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        country: this.user.country,
        address: this.user.address,
      });
    },
  },
};
</script>
