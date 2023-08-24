<script setup lang="ts">
import { hello } from '@elephant4vue/shared';

const props = withDefaults(
  defineProps<{
    text?: string;
  }>(),
  {
    text: 'World',
  },
);

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <button class="elephant-button" @click="clickHandler">
    <slot></slot>
  </button>
</template>
