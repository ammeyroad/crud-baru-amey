<script setup>
import memoform from '@/components/memoform.vue';
import memoview from '@/components/memoview.vue';
import memoedit from '@/components/memoedit.vue';
import jadwalform from '@/components/jadwalform.vue';
import api from '@/stores/api.js';
import { ref } from 'vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

<template>
  <main>
    <button
      type="button"
      @click="openModal"
      class="
        rounded-md
        bg-black bg-opacity-20
        px-4
        py-2
        text-sm
        font-medium
        text-white
        hover:bg-opacity-30
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white
        focus-visible:ring-opacity-75
      "
    >
      Open dialog
    </button>

    <section class="py-8 px-5 sm:flex flex-wrap">
      <div class="sm:w-8/12"><memoview /></div>
      <div class="sm:w-4/12"><jadwalform /><memoform /></div>
    </section>
  </main>
</template>
