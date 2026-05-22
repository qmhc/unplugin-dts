<script lang="ts">
import { defineComponent, ref } from 'vue'

const Component = defineComponent({
  name: 'NoDirectExport',
  props: {
    foo: {
      type: String,
      default: '',
    },
  },
  setup() {
    const baz = ref(0)

    return { baz }
  },
})

// eslint-disable-next-line vue/require-direct-export
export default Component
</script>

<template>
  <div></div>
</template>
