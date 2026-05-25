<script>
// If you still want to ge the currect types inference with using
// js syntax, you need using defineComponent to define component
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'JsTest',
  setup() {
    const count = ref(0)

    return { count }
  },
})
</script>

<template>
  <div class="js-test">
    {{ count }}
  </div>
</template>
