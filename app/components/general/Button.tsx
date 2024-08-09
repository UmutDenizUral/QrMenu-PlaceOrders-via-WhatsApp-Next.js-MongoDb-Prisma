

type ButtonProps = {
  text: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  outline?: boolean,
  small?: boolean,
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ onClick, small, text, outline,disabled }) => {
  return (
    <button className={`my-1 flex items-center justify-center gap-2 mt-2 rounded-lg p-2 ${small ? 'w-[250px]' : 'w-full'} ${outline ? 'border hover:text-yellow-600 text-black' : ' bg-slate-800 text-white'}`}
    disabled={disabled}
      onClick={onClick}>{text}</button>
  )
}

export default Button