import { IconType } from "react-icons"


type ButtonProps = {
  text: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  outline?: boolean,
  small?: boolean,
  disabled?: boolean,
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({ onClick, small, text, outline,disabled,icon: Icon }) => {
  return (
    <button className={`my-1 flex items-center justify-center gap-2 mt-2 rounded-lg p-2 ${small ? 'w-[250px]' : 'w-full'} ${outline ? 'border hover:text-yellow-600 text-black' : ' bg-slate-800 text-white'}`}
    disabled={disabled}
      onClick={onClick}
      >{Icon && <Icon />}{text}</button>
  )
}

export default Button