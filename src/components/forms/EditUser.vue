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
          v-model="user.firstName"
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
          v-model="user.lastName"
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
          v-model="user.email"
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
          v-model="user.country"
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
          v-model="user.address"
          placeholder="Address"
          required
        />
      </div>
      <div class="w-1/2"></div>
    </div>
    <div class="flex gap-2 md:gap-4 flex-col md:flex-row items-center">
      <div class="w-full px-4 sm:px-32 md:px-0 py-2 md:py-0 md:w-1/2">
        <submit-button title="Update User" @click="updateUser" />
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "@/store.js";
import FormLabel from "@/components/forms/Label.vue";
import CustomInput from "@/components/forms/CustomInput.vue";
import CountryInput from "@/components/forms/CountryInput.vue";
import SubmitButton from "@/components/forms/SubmitButton.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  minLength,
  alpha,
} from "@vuelidate/validators";
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
      id: this.$route.params.id,
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
  methods: {
    setData(data) {
      this.user.country = data;
    },
    clearData(data) {
      this.user.country = data;
    },
    async updateUser() {
      const result = await this.v$.$validate();
      if (!result) {
        //
        return;
      }
      this.users[this.id] = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        address: this.user.address,
        country: this.user.country,
      };
      this.$router.go(-1);
    },
  },
  mounted() {
    this.user.firstName = store.users[this.id].firstName;
    this.user.lastName = store.users[this.id].lastName;
    this.user.email = store.users[this.id].email;
    this.user.address = store.users[this.id].address;
    this.user.country = store.users[this.id].country;
  },
  components: {
    FormLabel,
    CustomInput,
    CountryInput,
    SubmitButton,
  },
};
</script>
