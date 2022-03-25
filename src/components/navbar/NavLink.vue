<template>
    <router-link :to="to" class="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
        {{ name }}
    </router-link>
</template>
<script>
export default {
    name: 'NavLink',
    props: {
        name: String,
        to: String
    }
}
</script>
<style>
.router-link-active {
    color: rgb(26 86 219 / 1) !important;
}
@media only screen and (max-width: 768px) {
    .router-link-active {
        background-color: rgb(29 78 216);
        color: white !important;
        border-radius: 0.25rem;
        transition: all .2s;
    }
    .router-link-active:hover {
        color: rgb(55 65 81) !important;
    }
}
</style>