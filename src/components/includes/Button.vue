<script setup>
defineProps({
  deletButton: Boolean,
  buttonName: String,
})
</script>
<template>
  <div class="cursor-pointer">
    <button v-if="!deletButton" class="max-w-max bg-cyan-600 border-gray-400 text-gray-100 rounded-full px-6 py-2 border shadow hover:scale-105 duration-75">
      {{ buttonName }}
    </button>
    <div v-else class="text-center p-2 border rounded-full hover:scale-105 duration-75">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  </div>
</template>
