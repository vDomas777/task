<template>
    <input type="text" v-bind="$attrs" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-2"
    :value="modelValue"
    :placeholder="placeholder" 
    @input="(e) => $emit('update:modelValue', e.target.value)" 
    />
</template>
<script>
export default {
    props: {
        modelValue: String,
        placeholder: String
    }
}
</script>
