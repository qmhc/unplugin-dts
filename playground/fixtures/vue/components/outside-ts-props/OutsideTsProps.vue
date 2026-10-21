<script setup lang="ts">
import type { BaseProps } from './props'

type Props = {
  title: BaseProps['title'],
  msg?: string,
}

withDefaults(defineProps<Props>(), {
  msg: undefined,
})
</script>

<template>
  <div class="outside-props">
    {{ title }}
  </div>
</template>
