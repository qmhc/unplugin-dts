// If you still want to ge the currect types inference with using
// js syntax, you need using defineComponent to define component
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TsxTest',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    return () => (
      <div class={'tsx-test'}>
        {props.msg}
        {slots.default?.() ?? null}
      </div>
    )
  },
})
