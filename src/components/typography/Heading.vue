<template>
    <div class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate text-center md:text-left">
        {{ title }}
        <div class="text-sm text-gray-500 sm:truncate">{{subTitle }}</div>
    </div>
</template>
<script>
export default {
    name: 'Heading',
    props: {
        title: String,
        subTitle: String
    }
}
</script>