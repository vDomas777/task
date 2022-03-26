<template>
    <div>
        <div class="searchbar m-4 md:m-0">
            <search-bar v-bind:value="searchFilter" v-on:input="searchFilter = $event.target.value" />
        </div>
        <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative block xl:inline-table whitespace-nowrap overflow-x-auto">
            <thead> 
                <tr class="text-left">
                    <th 
                        class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs" 
                        v-for="heading in headings"
                        :key="heading.key">{{ heading.value }}
                    </th>
                    <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-3 text-gray-600 font-bold tracking-wider uppercase text-xs">
                        #
                    </th>
                    </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in filteredUsers" :key="index">
                    <data-cell>
                        {{ user.firstName}}
                    </data-cell>
                    <data-cell>
                        {{ user.lastName}}
                    </data-cell>
                    <data-cell>
                        {{ user.email}}
                    </data-cell>
                    <data-cell>
                        {{ user.country}}
                    </data-cell>
                    <data-cell>
                        {{ user.address}}
                    </data-cell>
                    <data-cell>
                        <edit-button title="Edit" :index="index" />
                        <delete-button @click="removeUser(index)" title="Delete" class="ml-2"/>
                    </data-cell>
                </tr>
            </tbody>
    </table>
    </div>
</template>
<script>
import EditButton from './buttons/EditButton.vue'
import DeleteButton from './buttons/DeleteButton.vue'
import DataCell from './DataCell.vue'
import SearchBar from './SearchBar.vue'
import { store } from '@/store.js'
export default {
    props: {
        users: Array,
    },
    components: {
        EditButton,
        DeleteButton,
        DataCell,
        SearchBar
    },
    data() {
        return {
            searchFilter: '',
            headings: [
                {
                    key: 'firstName',
                    value: 'First Name'
                },
                {
                    key: 'lastName',
                    value: 'Last Name'
                },
                {
                    key: 'email',
                    value: 'Email'
                },
                {
                    key: 'country',
                    value: 'Country'
                },
                {
                    key: 'address',
                    value: 'Address'
                },
            ],
        }
    },
    methods: {
        removeUser(index) {
            if(confirm("Do you really want to delete user?")) {
                store.users.splice(index, 1)
            }
        },
    },
    computed: {
        filteredUsers() {
            let usr = this.users;
            let tempArr = []
            if(this.searchFilter !== '') {
                tempArr = usr.filter(p => 
                    p.firstName.toLowerCase().includes(this.searchFilter.toLowerCase()) ||
                    p.lastName.toLowerCase().includes(this.searchFilter.toLowerCase()) ||
                    p.email.toLowerCase().includes(this.searchFilter.toLowerCase()) ||
                    p.country.toLowerCase().includes(this.searchFilter.toLowerCase()) ||
                    p.address.toLowerCase().includes(this.searchFilter.toLowerCase()) 
                 )
            } else {
                tempArr = usr
            }
             return tempArr
        }
    }

}
</script>
