<script lang="jsx">
import { ref } from 'vue'

export default {
  name: 'JsxLangTest',
  setup() {
    const count = ref(0)

    return () => (
      <div class={'jsx-lang-test'} onClick={() => count.value++}>
        {count.value}
      </div>
    )
  },
}
</script>
