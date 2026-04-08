<template>
  <NuxtLayout name="simple">
    <template #default>
      <div class="flex flex-col gap-10 mt-10">
        <div class="flex flex-row">
          <AppLogoType class="w-full col-span-4 text-black dark:text-white" />

          <div
            class="flex flex-row relative w-fit col-span-1 items-end justify-end">
            <img
              src="/assets/dp.webp"
              alt="avatar"
              class="w-14 h-14 rounded-full object-cover object-center shrink-0" />
            <div
              class="w-14 h-14 shrink-0 flex items-center justify-center bg-black dark:bg-white rounded-full -ml-4">
              <AppLogo class="text-white dark:text-black w-7 h-7" />
            </div>
          </div>
        </div>
        <div class="flex flex-row justify-between items-start gap-5">
          <ArrowRight class="w-20 h-20" />
          <p class="dark:font-light text-2xl leading-tight w-fit">
            Ambitious and versatile creative designer skilled in branding,
            UI/UX, motion content and web development.
          </p>
        </div>
      </div>
    </template>

    <template #footer-actions>
      <NuxtLink
        to="mailto:khairinkamarizal@gmail.com"
        class="group flex items-center">
        <div
          class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>Hit me up</span>
        <div
          class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight
          class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
      <NuxtLink
        to="https://be.net/khairinkamarizal"
        class="group flex items-center">
        <div
          class="flex-none group-hover:flex-1 transition-all duration-300 h-1"></div>
        <span>View my portfolio</span>
        <div
          class="flex-1 group-hover:flex-none transition-all duration-300 group-hover:w-2 h-1"></div>
        <ArrowUpRight
          class="group-hover:rotate-45 transition-transform duration-300" />
      </NuxtLink>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowUpRight } from "lucide-vue-next";
import { useHead, definePageMeta } from "#imports";

definePageMeta({
  layout: false,
});

useHead({
  title: "",
  meta: [
    {
      name: "description",
      content:
        "Ambitious and versatile creative designer skilled in branding, UI/UX, motion content and web development.",
    },
  ],
});
</script>
