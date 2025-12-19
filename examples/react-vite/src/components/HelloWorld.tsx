import { useCount } from '@/hooks/useCount'

interface Props {
  count?: number,
}

export function HelloWorld(props: Props) {
  const [count, setCount] = useCount(props.count)

  return (
    <div className={'hello-world'}>
      <button onClick={() => setCount(count => count + 1)}>
        {'count is '}
        {count}
      </button>
    </div>
  )
}
