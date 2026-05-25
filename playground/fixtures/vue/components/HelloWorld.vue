<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      validator: (value: string) => value.length > 0,
      default: '',
    },
  },
  setup(props) {
    const count = ref(0)
    const labelMsg = computed(() => `message: ${props.msg}`)

    return { count, labelMsg }
  },
})
</script>

<template>
  <h1>{{ labelMsg }}</h1>
  <slot :scope="count"></slot>
  <button @click="count++">
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
