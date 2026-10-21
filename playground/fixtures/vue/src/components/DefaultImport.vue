<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DefaultImport',
  components: {
    HelloWorld,
  },
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const count = ref(0)
    return {
      count,
    }
  },
})
</script>

<template>
  <HelloWorld></HelloWorld>
  <div class="default-import">
    {{ count }}
  </div>
</template>
