<script setup lang="ts">
// #167
import { ref } from 'vue'

defineProps<{ msg: string | undefined }>()

const count = ref(400)
</script>

<template>
  <div class="css-var"></div>
</template>

<style scoped>
.css-var {
  font-weight: v-bind(count);
}
</style>
