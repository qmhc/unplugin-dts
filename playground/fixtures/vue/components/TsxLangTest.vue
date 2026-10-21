<script lang="tsx">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TsxLangTest',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup() {
    const count = ref(0)

    return () => (
      <div class={'tsx-lang-test'} onClick={() => count.value++}>
        {count.value}
      </div>
    )
  },
})
</script>
