<template>
    <default-layout>
        <heading title="Edit" :subTitle="`In this page you can edit ${currentUser.firstName} ${currentUser.lastName}...`" />
    </default-layout>
</template>
<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Heading from '@/components/typography/Heading.vue'
import { store } from '@/store.js'
export default {
    name: 'Edit',
    components: {
        DefaultLayout,
        Heading,
    },
    data() {
        return {
            id: this.$route.params.id,
            currentUser: []
        }
    },
    mounted() {
        this.currentUser = store.users[this.id]
    }
}
</script>
