<script setup>
defineProps({
  as: {
    type: String,
    default: 'div',
  },
})
</script>
<template>
  <component :is="as" class="shadow w-full bg-white flex justify-center py-6 items-center">
    <slot />
  </component>
</template>
