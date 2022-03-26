<template>
    <default-layout>
        <heading title="Create User" subTitle="In this page you can create a new user..." />
        <create-user />
    </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Heading from '@/components/typography/Heading.vue'
import CreateUser from '@/components/forms/CreateUser.vue'
import { store } from '@/store.js'
export default {
    name: 'Home',
    components: {
        DefaultLayout,
        Heading,
        CreateUser
    },
}
</script>
