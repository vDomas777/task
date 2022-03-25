<template>
    <default-layout>
        <heading title="User List" subTitle="In this page you can view a user list..." />
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
    }
}
</script>
