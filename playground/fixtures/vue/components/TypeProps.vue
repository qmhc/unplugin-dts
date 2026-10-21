<template>
  <div>{{ color }}</div>
</template>

<script setup lang="ts">
export type Props = {
  color: 'blue' | 'red' | 'purple' | 'yellow',
  array?: { foo: number }[],
}

withDefaults(defineProps<Props>(), {
  array: () => [],
})

interface Events {
  (e: 'cellClick', evt: string): void,
  (e: 'dragSelectUpdate', values: number[]): void,
  (e: 'headerClick', column: unknown): void,
}

defineEmits<Events>()
</script>
