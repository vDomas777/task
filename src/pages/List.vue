<template>
    <default-layout>
        <heading title="User List" subTitle="In this page you can view a user list..." />
        <user-list-table class="mt-4" :users="users"/>
    </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Heading from '@/components/typography/Heading.vue'
import UserListTable from '@/components/tables/UserListTable/UserListTable.vue'
import User  from '@/modules/users'
export default {
    data () {
        return {
            users: null
        }
    },
    name: 'Home',
    components: {
        DefaultLayout,
        Heading,
        UserListTable
    },
    mounted() {
        this.users = User.getUsers();
    }
}
</script>
