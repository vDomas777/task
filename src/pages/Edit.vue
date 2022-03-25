<template>
    <default-layout>
        <heading title="Edit" :subTitle="`In this page you can edit ${currentUser.firstName} ${currentUser.lastName}...`" />
    </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Heading from '@/components/typography/Heading.vue'
import User  from '@/modules/users'
export default {
    name: 'Edit',
    components: {
        DefaultLayout,
        Heading,
        User
    },
    data() {
        return {
            id: this.$route.params.id,
            currentUser: []
        }
    },
    mounted() {
        this.currentUser = User.getUser(this.id)
    }
}
</script>
