<template>
  <div class="flex flex-col gap-12 mt-4 flex-1 pb-16">
    <!-- Header -->
    <header class="flex flex-col gap-4">
      <img
        src="/assets/brutalist.svg"
        alt="Brutalist"
        class="w-full dark:invert" />
      <p class="text-sm opacity-60">
        Submit any design screenshot and get a brutally honest critique from AI.
        Select your required honesty level, but don't say I didn't warn you.
      </p>
    </header>

    <!-- Upload Form -->
    <section
      class="relative z-10 bg-white dark:bg-neutral-950 p-6 md:p-8 border border-neutral-200 dark:border-neutral-800/60 transition-all duration-300">
      <div class="space-y-8">
        <!-- Image Upload Area -->
        <div
          @dragover.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          @drop.prevent="handleDrop"
          class="border-2 border-dashed flex flex-col items-center justify-center p-8 transition-all duration-300 relative group overflow-hidden"
          :class="[
            isDragging
              ? 'border-neutral-500 bg-neutral-100/50 dark:bg-neutral-900/50'
              : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700',
            imagePreview
              ? 'border-none p-0 bg-neutral-100 dark:bg-neutral-900 aspect-square'
              : 'min-h-[200px]',
          ]">
          <template v-if="!imagePreview">
            <input
              type="file"
              id="file-upload"
              class="hidden"
              accept="image/png, image/jpeg, image/webp"
              @change="handleFileInput" />
            <label
              for="file-upload"
              class="cursor-pointer flex flex-col items-center justify-center gap-4 w-full h-full text-center absolute inset-0">
              <div
                class="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-full group-hover:scale-110 transition-transform duration-300">
                <UploadCloud class="w-6 h-6 opacity-60" />
              </div>
              <div class="space-y-1 z-10">
                <p class="text-sm font-medium">
                  Click to upload or drag & drop
                </p>
                <p class="text-xs opacity-50">PNG, JPG, WEBP (max 5MB)</p>
              </div>
            </label>
          </template>

          <template v-else>
            <div
              class="relative w-full h-full flex items-center justify-center group overflow-hidden">
              <div
                class="absolute inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-sm z-0">
                <img
                  :src="imagePreview"
                  class="w-full h-full object-cover opacity-30 blur-xl scale-110" />
              </div>
              <img
                :src="imagePreview"
                alt="preview"
                class="object-contain w-full h-full max-h-[500px] z-10 transition-transform duration-700 group-hover:scale-[1.02]" />

              <button
                @click.stop="clearImage"
                class="absolute top-4 right-4 bg-black/60 text-white p-2.5 rounded-full hover:bg-black/80 hover:scale-110 transition-all z-20 md:opacity-0 md:group-hover:opacity-100 flex items-center justify-center backdrop-blur-md border border-white/10"
                title="Remove image">
                <X class="w-5 h-5" />
              </button>
            </div>
          </template>
        </div>

        <!-- Honesty Slider -->
        <div
          class="space-y-5 px-1 pt-2 border-t border-neutral-100 dark:border-neutral-900 pt-6">
          <div
            class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
            <div>
              <label class="text-base font-semibold flex items-center gap-2">
                Honesty Dial
                <span
                  class="text-sm font-normal py-0.5 px-2 bg-neutral-100 dark:bg-neutral-900 rounded tabular-nums"
                  >{{ honesty }}/10</span
                >
              </label>
            </div>
            <span
              class="text-xs font-medium px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded self-start sm:self-auto transition-colors duration-300"
              :style="{ color: currentScaleColor }">
              {{ scaleLabel }}
            </span>
          </div>

          <div
            class="relative w-full h-10 flex items-center group cursor-pointer"
            @click="handleTrackClick">
            <!-- Gradient Bar -->
            <div
              class="absolute inset-0 top-1/2 -translate-y-1/2 h-2.5 rounded-full overflow-hidden flex shadow-inner bg-neutral-100 dark:bg-neutral-900">
              <div
                class="h-full transition-all duration-300 ease-out"
                :style="{
                  width: `calc(${(honesty - 1) * 11.1111}%)`,
                  backgroundColor: currentScaleColor,
                }"></div>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              v-model.number="honesty"
              class="absolute w-full h-full opacity-0 cursor-pointer z-20" />

            <!-- Custom Handle -->
            <div
              class="absolute h-6 w-6 bg-white border border-neutral-200 pointer-events-none rounded-full top-1/2 -translate-y-1/2 z-10 transition-colors shadow-[0_2px_10px_rgba(0,0,0,0.15)] flex items-center justify-center group-hover:scale-110 ease-out duration-200 ring-2 ring-transparent ring-offset-1 focus-within:ring-neutral-400 group-hover:ring-neutral-200 dark:group-hover:ring-neutral-700 dark:group-hover:bg-neutral-100"
              :style="{
                left: `calc(${(honesty - 1) * 11.1111}% - ${((honesty - 5) / 5) * 12}px)`,
                borderColor: currentScaleColor,
              }">
              <div
                class="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                :style="{ backgroundColor: currentScaleColor }"></div>
            </div>
          </div>

          <div
            class="flex justify-between text-[11px] uppercase tracking-wider opacity-40 font-semibold px-0.5">
            <span>Sugar-coated</span>
            <span>Ruthless</span>
          </div>
        </div>

        <!-- Submit Section -->
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100 dark:border-neutral-900 pt-6">
          <div class="flex-1 w-full text-center sm:text-left">
            <Transition
              name="fade"
              mode="out-in">
              <p
                v-if="errorMsg"
                class="text-sm text-red-500 font-medium py-2">
                {{ errorMsg }}
              </p>
              <p
                v-else
                class="text-[10px] opacity-50 max-w-sm hidden sm:block">
                Your images aren’t saved, they’re deleted right after the AI
                finishes its critique.
              </p>
            </Transition>
          </div>

          <button
            @click="submitDesign"
            :disabled="isSubmitting || !imagePreview"
            class="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-lg font-normal hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3 group shrink-0"
            :style="
              !isSubmitting && imagePreview
                ? {
                    boxShadow: `0 4px 20px ${currentScaleColor}30`,
                  }
                : {}
            ">
            <span
              v-if="isSubmitting"
              class="animate-spin inline-block w-4 h-4 border-[3px] border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full"></span>
            <Flame
              v-else
              class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>{{
              isSubmitting ? "Analyzing Design..." : "Get Critique"
            }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Critiques List -->
    <section
      v-if="critiques.length > 0"
      class="space-y-8 animate-fade-in mt-4">
      <div class="flex justify-between items-end">
        <h2 class="text-2xl font-semibold tracking-tight">Your Critiques</h2>
        <span
          class="text-xs font-semibold opacity-50 px-2 py-1 bg-neutral-100 dark:bg-neutral-900 rounded"
          >{{ critiques.length }} items</span
        >
      </div>

      <TransitionGroup
        name="list"
        tag="div"
        class="flex flex-col gap-8">
        <article
          v-for="item in reversedCritiques"
          :key="item.id"
          class="group bg-white dark:bg-neutral-950 p-0 transition-all duration-300 overflow-hidden flex flex-col relative border border-neutral-200 dark:border-neutral-800/60">
          <div
            class="flex items-center justify-center overflow-hidden min-h-[250px] relative">
            <div
              class="absolute inset-0 bg-black/5 dark:bg-white/5 backdrop-blur-md z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              :src="item.image"
              loading="lazy"
              class="w-full h-full object-cover z-10 block transition-transform duration-700" />
          </div>

          <!-- Content Side -->
          <div
            class="p-5 sm:p-6 md:p-8 flex flex-col w-full bg-white dark:bg-neutral-950">
            <!-- Brutalist Header: Massive Score & Emoji -->
            <div
              class="grid grid-cols-2 border-b-2 border-neutral-100 dark:border-neutral-900 pb-5 mb-5 overflow-hidden">
              <div
                class="flex flex-col gap-2 items-center justify-start border-r-2 border-neutral-100 dark:border-neutral-900">
                <span
                  class="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40"
                  >My Rating</span
                >
                <div class="flex items-end gap-2 sm:gap-3">
                  <span
                    class="text-6xl leading-none font-semibold tracking-tighter"
                    :style="{ color: getScaleColor(10 - item.rating) }">
                    {{ item.rating }}
                  </span>
                  <span class="text-lg font-semibold opacity-30">/ 10</span>
                </div>
              </div>

              <div class="flex flex-col gap-3 items-center justify-start">
                <span
                  class="text-[10px] sm:text-xs font-bold uppercase tracking-widest opacity-40"
                  >My Reaction</span
                >
                <span
                  class="text-4xl sm:text-5xl filter transition-all duration-300 leading-none">
                  {{ item.emoji }}
                </span>
              </div>
            </div>

            <!-- Content Area -->
            <div class="flex flex-col gap-6 sm:gap-8 flex-1">
              <!-- Verdict -->
              <div class="space-y-3">
                <div
                  class="inline-flex py-1 px-2.5 bg-black text-white dark:bg-white dark:text-black text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  The Verdict
                </div>
                <p class="text-base leading-relaxed">
                  {{ item.critique }}
                </p>
              </div>

              <!-- Fixes -->
              <div class="space-y-3">
                <div
                  class="inline-flex py-1 px-2.5 bg-neutral-100 dark:bg-neutral-900 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                  Action Items
                </div>
                <p class="text-base leading-relaxed opacity-80">
                  {{ item.suggestions }}
                </p>
              </div>
            </div>

            <div
              class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              :style="{
                background: `linear-gradient(45deg, transparent, transparent, ${getScaleColor(item.honesty_level)}05)`,
              }"></div>
          </div>
        </article>
      </TransitionGroup>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useHead, definePageMeta } from "#imports";
import { UploadCloud, X, Flame, MessageSquare, Cog } from "lucide-vue-next";

definePageMeta({
  layout: "simple",
});

useHead({
  title: "Brutalist | AI Design Critique",
  meta: [
    {
      name: "description",
      content:
        "Get a brutally honest critique of your design using AI. No sugar-coating allowed.",
    },
  ],
});

interface CritiqueItem {
  id: string;
  image: string;
  critique: string;
  suggestions: string;
  rating: number;
  honesty_level: number;
  emoji: string;
  createdAt: number;
}

const isDragging = ref(false);
const imageFile = ref<File | null>(null);
const imagePreview = ref<string>("");
const honesty = ref(5);

const isSubmitting = ref(false);
const errorMsg = ref("");
const critiques = ref<CritiqueItem[]>([]);

const reversedCritiques = computed(() => [...critiques.value].reverse());

// Vibrant Color scale
const getScaleColor = (val: number) => {
  if (val <= 2) return "#60A5FA"; // Soft pastel blue
  if (val <= 4) return "#34D399"; // Emerald
  if (val <= 6) return "#FBBF24"; // Amber
  if (val <= 8) return "#F97316"; // Orange
  if (val <= 9) return "#EF4444"; // Red
  return "#B91C1C"; // Deep Crimson
};

const currentScaleColor = computed(() => getScaleColor(honesty.value));

const scaleLabel = computed(() => {
  if (honesty.value <= 2) return "Sugar-coated 🌸";
  if (honesty.value <= 4) return "Gentle 🌱";
  if (honesty.value <= 6) return "Fair ⚖️";
  if (honesty.value <= 8) return "Harsh 🌶️";
  if (honesty.value === 9) return "Brutal 🔥";
  return "Ruthless ☠️";
});

// Time formatting helper
const formatTimeAgo = (timestamp: number) => {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return `Just now`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
};

// Handle timeline click to jump
const handleTrackClick = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const percentage = x / rect.width;
  let newScale = Math.round(percentage * 9) + 1;
  newScale = Math.max(1, Math.min(10, newScale));
  honesty.value = newScale;
};

// File handlers
const handleDrop = (e: DragEvent) => {
  isDragging.value = false;
  if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
    const file = e.dataTransfer.files[0];
    if (file) processFile(file);
  }
};

const handleFileInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    if (file) processFile(file);
  }
};

const processFile = (file: File) => {
  errorMsg.value = "";
  if (!file.type.startsWith("image/")) {
    errorMsg.value = "Please upload a valid image file.";
    return;
  }
  // Check limit (4MB recommended for gemini base64 inline sending)
  if (file.size > 4 * 1024 * 1024) {
    errorMsg.value = "Image is too large. Max 4MB allowed.";
    return;
  }

  imageFile.value = file;

  const reader = new FileReader();
  reader.onload = (e) => {
    imagePreview.value = e.target?.result as string;
  };
  reader.readAsDataURL(file);
};

const clearImage = () => {
  imageFile.value = null;
  imagePreview.value = "";
  const input = document.getElementById("file-upload") as HTMLInputElement;
  if (input) input.value = "";
  errorMsg.value = "";
};

// Form submission
const submitDesign = async () => {
  if (!imagePreview.value) {
    errorMsg.value = "Please upload an image first.";
    return;
  }

  isSubmitting.value = true;
  errorMsg.value = "";

  try {
    const res = await $fetch("/api/critique", {
      method: "POST",
      body: {
        image: imagePreview.value,
        honesty_scale: honesty.value,
      },
    });

    const newCritique: CritiqueItem = {
      id: Math.random().toString(36).substring(2, 9),
      image: imagePreview.value,
      critique: res.critique,
      suggestions: res.suggestions,
      rating: res.rating || 5,
      honesty_level: res.honesty_level,
      emoji: res.emoji,
      createdAt: Date.now(),
    };

    critiques.value.push(newCritique);

    // Reset form after successful submission
    clearImage();
    honesty.value = 7;

    // Scroll down to new critique
    setTimeout(() => {
      const articles = document.querySelectorAll("article");
      if (articles.length > 0 && articles[0]) {
        articles[0].scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);
  } catch (err: any) {
    errorMsg.value =
      err.data?.statusMessage ||
      err.message ||
      "Failed to analyze design. Try again.";
  } finally {
    isSubmitting.value = false;
  }
};

// Reactive timestamps update
let interval: any;

onMounted(() => {
  interval = setInterval(() => {
    critiques.value = [...critiques.value];
  }, 60000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-40px) scale(0.95);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

/* Custom range styles for seamless thumb hiding */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  background: transparent;
}
</style>
