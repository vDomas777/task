<template>
    <default-layout>
        <heading title="Home" subTitle="This is a home page..." />
    </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Heading from '@/components/typography/Heading.vue'
export default {
    name: 'Home',
    components: {
        DefaultLayout,
        Heading
    },
}
</script>
