<template>

    <router-link :to="'/edit/' + index" class="inline-block px-4 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-black rounded shadow ripple waves-light hover:shadow-lg focus:outline-none hover:bg-black">
        {{ title }}
    </router-link>
</template>
<script>
export default {
    props: {
        title: String,
        index: Number
    }
}
</script>
