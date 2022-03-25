<template>
    <nav class="bg-white drop-shadow-sm px-2 py-6">
        <div class="container mx-auto flex flex-wrap items-center justify-between">
            <a href="#" class="flex">
                <span class="self-center text-lg font-semibold whitespace-nowrap">CRUD</span>
            </a>
            <button data-collapse-toggle="mobile-menu" type="button" class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
                <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                    <nav-link to="/" name="Home" />
                    <nav-link to="/create" name="Create User" />
                    <nav-link to="/list" name="User List" />
                </ul>
            </div>
        </div>
    </nav>
    <div class="container mx-auto">
        <slot />
    </div>
</template>
<script>
import NavLink from '@/components/navbar/NavLink.vue'
export default {
    name: 'DefaultLayout',
    components: {
        NavLink
    }
}
</script>
