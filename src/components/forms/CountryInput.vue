<template>
    <div>
        <custom-input @focus="activeSearch()" @input="activeSearch($event)" @blur="closeDrop()" type="text" name="country"
          placeholder="Search by country..."
          v-bind="$attrs"
          required
        />
        <div class="absolute bg-white shadow-sm py-4 px-2 rounded w-full flex flex-row flex-wrap gap-2 max-h-72 overflow-y-auto" v-if="countryDrop">
          <div
            v-for="dt in data.data"
            :key="dt.name"
            class="bg-gray-300 rounded py-2 px-2 text-black cursor-pointer hover:text-white transition"
            @click="selectContry(dt.name)"
          >
            {{ dt.name }}
          </div>
        </div>
    </div>
</template>
<script>
import CustomInput from "@/components/forms/CustomInput.vue";
import axios from "axios";
export default {
    data() {
        return {
            countryDrop: false,
            countrySearch: "",
            data: "",
            country: '',
            selected: false
        }
    },
    methods: {
    closeDrop() {
      if(this.selected == false) {
        this.$emit('clear', null);
      }
      setTimeout(() => {
        this.countryDrop = false;
      }, 100);
    },
    selectContry(country) {
      this.countryDrop = false;
      this.$emit('clicked', country);
      this.country = country
      this.selected = true
    },
    activeSearch(event) {
      this.$emit('clear', null);
      this.selected = false
      this.countryDrop = true;
      if (event != null) {
        this.countrySearch = event.target.value;
      }
      if (this.countrySearch == "") {
        axios
          .get("https://restcountries.com/v2/all")
          .then((response) => (this.data = response));
      } else {
        axios
          .get("https://restcountries.com/v2/name/" + this.countrySearch)
          .then((response) => (this.data = response))
          .catch((err) => {
            if (err.response && err.response.status === 404) {
              console.clear();
            }
          });
      }
    },
  },
    components: {
        CustomInput
    }
}
</script>
