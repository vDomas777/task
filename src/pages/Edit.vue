<template>
    <default-layout>
        <!-- <heading title="Edit" :subTitle="`In this page you can edit ${currentUser.firstName} ${currentUser.lastName}...`" /> -->
        <edit-user  />
    </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Heading from '@/components/typography/Heading.vue'
import EditUser from '@/components/forms/EditUser.vue'
import { store } from '@/store.js'
export default {
    name: 'Edit',
    components: {
        DefaultLayout,
        Heading,
        EditUser
    }
}
</script>
