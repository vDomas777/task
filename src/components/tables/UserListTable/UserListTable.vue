<template>
    <table class="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative block md:inline-table whitespace-nowrap overflow-x-auto">
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
            <tr v-for="(user, index) in users" :key="index">
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
                    <edit-button title="Edit" />
                </data-cell>
            </tr>
        </tbody>
    </table>
</template>
<script>
import EditButton from './buttons/EditButton.vue'
import DataCell from './DataCell.vue'
export default {
    props: {
        users: Array,
    },
    components: {
        EditButton,
        DataCell
    },
    data() {
        return {
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
                
            ]
        }
    }
}
</script>
