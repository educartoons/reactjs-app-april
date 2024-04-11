type InputProps = {
  placeholder: string
  type: string
}

export default function Input(props: InputProps) {
  return (
    <input
      className="block bg-zinc-300 rounded px-2 border border-zinc-600"
      type={props.type}
      placeholder={props.placeholder}
    />
  )
}
