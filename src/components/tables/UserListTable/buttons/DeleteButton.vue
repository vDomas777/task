<template>
    <div class="cursor-pointer inline-block px-4 py-1 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple waves-light hover:shadow-lg focus:outline-none">
        {{ title }}
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        index: Number
    },
}
</script>
