import Input from './Input'

export default function Login() {
  return (
    <form action="">
      <div>
        <Input type="text" placeholder="username" />
      </div>
      <div>
        <Input type="password" placeholder="password" />
      </div>
      <button>Submit</button>
    </form>
  )
}
