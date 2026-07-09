<template>
  <div ref="containerRef" class="relative">
    <!-- Hamburger toggle button -->
    <button
      type="button"
      :aria-expanded="open"
      aria-controls="mobile-menu-dropdown"
      aria-label="Toggle navigation menu"
      class="flex items-center justify-center w-8 h-8 hover:opacity-60 transition-opacity duration-200"
      @click="open = !open">
      <component :is="open ? X : Menu" :size="20" stroke-width="1.5" />
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2">
      <div
        v-if="open"
        id="mobile-menu-dropdown"
        class="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-lg z-50 font-mono"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd">

        <!-- Close button -->
        <div class="flex justify-end px-3 pt-2">
          <button
            type="button"
            aria-label="Close menu"
            class="flex items-center justify-center w-7 h-7 opacity-40 hover:opacity-100 transition-opacity"
            @click="open = false">
            <X :size="16" stroke-width="1.5" />
          </button>
        </div>

        <!-- Nav links -->
        <div class="py-1">
          <AppNav direction="vertical" />
        </div>

        <!-- Social links -->
        <div class="border-t border-black/10 dark:border-white/10 px-4 py-3 flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            class="text-xs tracking-widest opacity-50 hover:opacity-100 transition-opacity uppercase">
            GH
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            class="text-xs tracking-widest opacity-50 hover:opacity-100 transition-opacity uppercase">
            LI
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            class="text-xs tracking-widest opacity-50 hover:opacity-100 transition-opacity uppercase">
            TW
          </a>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import { Menu, X } from "lucide-vue-next";

const open = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const route = useRoute();

// Close on route change
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  }
);

// Swipe left to close
let touchStartX = 0
const onTouchStart = (e: TouchEvent) => { touchStartX = e.touches[0].clientX }
const onTouchEnd = (e: TouchEvent) => {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (diff > 50) open.value = false // swipe left to close
}

// Close on outside click
function handleOutsideClick(event: MouseEvent) {
  if (open.value && containerRef.value && !containerRef.value.contains(event.target as Node)) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener("mousedown", handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleOutsideClick);
});
</script>
