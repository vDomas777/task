<template>
    <button class="bg-blue-500 text-white px-16 py-2 rounded-md text-1xl w-full font-medium hover:bg-blue-700 transition duration-300 active:mt-1">{{ title }}</button>
</template>
<script>
export default {
    props: {
        title: String
    }
}
</script>
