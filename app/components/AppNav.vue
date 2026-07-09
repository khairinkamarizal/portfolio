<template>
  <nav class="flex flex-row items-center gap-4 flex-wrap">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="text-xs tracking-wider transition-opacity duration-200"
      :class="isActive(link.to) ? 'opacity-100 font-medium' : 'opacity-40 hover:opacity-70'">
      {{ link.label.toUpperCase() }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/writing", label: "Writing" },
  { to: "/message", label: "Message" },
  { to: "/brutalist", label: "Brutalist" },
];

function isActive(path: string): boolean {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
}
</script>
