<template>
  <Transition name="fade-overlay">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black">
      <div class="w-24 h-24 md:w-32 md:h-32 text-black dark:text-white">
        <AppLogo />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => {
  console.log(
    "%chey i saw u. thanks for stopping by my portfolio.\ni hope you find something that inspires you here.\n— Khairinkamarizal%c",
    "background: #fff; color: #000; padding: 4px 12px; font-weight: semibold; font-size: 14px; font-family: sans-serif; letter-spacing: 2px;",
    "background: #fff; color: #000; padding: 4px 12px; font-weight: semibold; font-size: 14px; font-family: sans-serif; letter-spacing: 2px;",
  );
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>
.fade-overlay-leave-active {
  transition:
    opacity 1.2s cubic-bezier(0.7, 0, 0.3, 1),
    transform 1.2s cubic-bezier(0.7, 0, 0.3, 1);
}

.fade-overlay-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}

:deep(svg) {
  transition: all 0.5s ease;
}
</style>
