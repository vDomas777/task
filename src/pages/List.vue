<template>
    <default-layout>
        <heading title="User List" subTitle="In this page you can view a user list..." />
        <user-list-table class="mt-4 px-4 md:px-0" :users="users"/>
    </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Heading from '@/components/typography/Heading.vue'
import UserListTable from '@/components/tables/UserListTable/UserListTable.vue'
import { store } from '@/store.js'
export default {
    data () {
        return {
            users: store.users
        }
    },
    name: 'List',
    components: {
        DefaultLayout,
        Heading,
        UserListTable
    },

}
</script>
