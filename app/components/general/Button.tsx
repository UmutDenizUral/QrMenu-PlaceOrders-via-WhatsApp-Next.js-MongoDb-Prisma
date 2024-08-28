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
    <button className={`my-1 min-w-[106px] flex items-center justify-center gap-2 mt-2 rounded-lg p-2 ${small ? 'w-[250px]' : 'w-full'} ${outline ? 'border-2 border-yellow-600 hover:text-yellow-600 text-black' : ' bg-yellow-600 border-2 border-slate-200 text-white '}`}
    disabled={disabled}
      onClick={onClick}
      >{Icon && <Icon />}{text}</button>
  )
}

export default Button