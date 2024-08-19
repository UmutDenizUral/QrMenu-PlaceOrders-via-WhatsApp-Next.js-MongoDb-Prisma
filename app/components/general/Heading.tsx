interface HeadingProps {
    id?: string;
    center?: boolean;
    text: string | null;
    submenu?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ center, text, submenu, id }) => {
    return (
        <div
            id={id}
            className={`border-b-4 px-3  
            ${center ? 'text-center' : 'text-start'}
            ${submenu ? 'border-none text-md text-black my-5 underline-offset-2 text-xl font-bold underline decoration-gray-400' : 'md:my-10  text-slate-500 ml-2 text-2xl mb-4 mt-6'}`}>
            {text}
        </div>
    )
}
export default Heading;
