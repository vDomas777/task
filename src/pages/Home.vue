<template>
    <default-layout>
        <heading title="Home" subTitle="This is a home page..." class="mb-4" />
        <users-statistics :usersCount="usersCount" />
    </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Heading from '@/components/typography/Heading.vue'
import UsersStatistics from '@/components/UsersStatistics.vue'
import { store } from '@/store.js'
export default {
    name: 'Home',
    components: {
        DefaultLayout,
        Heading,
        UsersStatistics
    },
    data() {
        return {
            usersCount: store.users.length
        }
    }
}
</script>
