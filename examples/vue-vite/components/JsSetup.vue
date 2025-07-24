<script setup>
import { ref } from 'vue'

const props = defineProps({
  count: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['on-add'])

const currentCount = ref(props.count)

const inc = () => {
  currentCount.value++
  emit('on-add', currentCount.value)
}

defineExpose({ inc })
</script>

<template>
  <div
    class="setup"
    @click="inc"
  >
    {{ count }}
  </div>
</template>
