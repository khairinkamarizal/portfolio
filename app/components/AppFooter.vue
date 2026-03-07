<template>
  <footer
    class="bg-[#111] dark:bg-[#000] text-[#F3F3F3] pt-24 pb-12 px-6 md:px-12">
    <div
      class="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
      <!-- Email -->
      <div class="flex flex-col gap-6">
        <span
          class="text-xs font-semibold text-white/40 uppercase tracking-[0.2em] mb-2">
          Say "Hello":
        </span>
        <a
          href="mailto:hello@mikeminimal.com"
          class="text-xl md:text-2xl font-medium hover:opacity-60 transition-opacity w-fit">
          hello@mikeminimal.com
        </a>
      </div>

      <!-- Navigate -->
      <div class="flex flex-col gap-6">
        <span
          class="text-xs font-semibold text-white/40 uppercase tracking-[0.2em] mb-2">
          Navigate:
        </span>
        <div class="flex flex-col gap-4 text-xl md:text-2xl font-medium">
          <a
            href="#"
            class="hover:opacity-60 transition-opacity w-fit"
            >home</a
          >
          <a
            href="#"
            class="hover:opacity-60 transition-opacity w-fit"
            >projects</a
          >
          <a
            href="#"
            class="hover:opacity-60 transition-opacity w-fit"
            >about</a
          >
          <a
            href="#"
            class="hover:opacity-60 transition-opacity w-fit"
            >start a project</a
          >
        </div>
      </div>

      <!-- Connect -->
      <div class="flex flex-col gap-6">
        <span
          class="text-xs font-semibold text-white/40 uppercase tracking-[0.2em] mb-2">
          Connect:
        </span>
        <div class="flex flex-col gap-4 text-xl md:text-2xl font-medium">
          <a
            href="#"
            class="hover:opacity-60 transition-opacity w-fit"
            >Behance</a
          >
          <a
            href="#"
            class="hover:opacity-60 transition-opacity w-fit"
            >Dribbble</a
          >
          <a
            href="#"
            class="hover:opacity-60 transition-opacity w-fit"
            >Twitter</a
          >
        </div>
      </div>

      <!-- Monogram -->
      <div class="flex flex-col justify-end mt-16 md:mt-0 md:items-end">
        <div
          class="text-[15vw] md:text-[6vw] leading-[0.8] font-medium tracking-tight">
          m.s.
        </div>
      </div>
    </div>
  </footer>
</template>
