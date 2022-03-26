<template>
  <div class="w-full lg:w-1/5 px-4 md:px-0">
    <div
      class="widget w-full p-4 rounded-lg bg-white border-l-4 border-blue-400"
    >
      <div class="flex items-center">
        <div class="icon w-14 p-3.5 bg-blue-400 text-white rounded-full mr-3">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <div class="flex flex-col justify-center">
          <div class="text-lg">{{ usersCount }}</div>
          <div class="text-sm text-gray-400">Users</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
        usersCount: Number
    }
}
</script>
