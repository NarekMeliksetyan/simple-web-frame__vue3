<template>
  <div class="relative mx-auto w-full h-full">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </div>
</template>
