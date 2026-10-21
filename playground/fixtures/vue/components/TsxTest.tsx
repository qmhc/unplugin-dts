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
