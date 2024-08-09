interface HeadingProps {
    center?: boolean
    text: string
    submenu?: boolean
}

const Heading: React.FC<HeadingProps> = ({ center, text, submenu }) => {
    return (
        <div className={`border-b-4  px-3  max-w-[130px]
            ${center ? 'text-center' : 'text-start'}
            ${submenu ? 'border-none text-md text-black my-5  text-xl font-bold' : 'md:my-10 text-slate-500 ml-2  text-2xl mb-4 mt-8 '}`}>
            {text}
        </div>
    )
}
export default Heading
