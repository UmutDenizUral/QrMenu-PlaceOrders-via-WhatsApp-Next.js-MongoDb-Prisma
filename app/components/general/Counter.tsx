import { CardProductsProps } from "@/hooks/useCart"


interface CounterProps {
  cardProduct: CardProductsProps,
  increaseFunc: () => void
  decreaseFunc: () => void
} 

const Counter: React.FC<CounterProps> = ({ cardProduct, increaseFunc, decreaseFunc }) => {
 const buttonStyle = 'w-8 h-8 border flex items-center justify-center text-xl rounded-full cursor-pointer shadow-md'
  return (
    <div className="flex items-center gap-2 mt-2">
      <div className={buttonStyle} onClick={decreaseFunc}>-</div>
      <div className="text-xl">{cardProduct.quantity}</div>
      <div className={buttonStyle} onClick={increaseFunc}>+</div>
    </div>
  )
}

export default Counter