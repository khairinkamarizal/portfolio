<template>
  <div class="relative">
    <!-- Hamburger toggle button -->
    <button
      type="button"
      :aria-expanded="open"
      aria-controls="mobile-menu-dropdown"
      aria-label="Toggle navigation menu"
      :class="[
        'flex items-center justify-center w-8 h-8 hover:opacity-60 transition-opacity duration-200',
        transparent ? 'mix-blend-difference text-white' : '',
      ]"
      @click="open = !open">
      <component :is="open ? X : Menu" :size="20" stroke-width="1.5" />
    </button>

    <!-- Dropdown overlay -->
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
        class="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-black border border-black/10 dark:border-white/10 shadow-lg z-50"
        style="font-family: 'Space Mono', monospace">

        <!-- Nav links -->
        <div class="py-1">
          <AppNav :mobile="true" @close="open = false" />
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
import { ref, watch } from "vue";
import { Menu, X } from "lucide-vue-next";

const open = ref(false);
const route = useRoute();

// Close on route change
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  }
);
</script>
