<template>
  <div class="group relative overflow-hidden">
    <div class="transition-transform duration-300 group-hover:-translate-y-full">
      <slot name="default" />
    </div>
    <div class="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
      <slot name="reveal" />
    </div>
  </div>
</template>
