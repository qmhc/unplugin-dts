<script setup lang="ts" generic="T extends { label: string }">
import { computed } from 'vue'

const props = defineProps<{
  item: T,
}>()

const emit = defineEmits<{
  select: [node: T],
}>()

const item = computed(() => props.item)
</script>

<template>
  <div class="setup" @click="emit('select', item)">
    {{ item.label }}
  </div>
  <HelloWorld></HelloWorld>
</template>
