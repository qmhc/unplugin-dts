<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  tag: {
    type: String,
    default: 'div',
  },
  count: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits({
  click: (event: MouseEvent) => true,
})

const currentCount = ref(props.count)

const inc = () => {
  currentCount.value++
}

defineExpose({ inc })
</script>

<script lang="ts">
// do not use defineComponent

export interface BothScriptsProps {
  /** comment */
  tag: string,
  count: number,
}

export default {
  name: 'BothScripts',
  customOptions: {},
}
</script>

<template>
  <component :is="tag" class="both-scripts" @click="emit('click', $event)">
    <slot></slot>
  </component>
</template>
