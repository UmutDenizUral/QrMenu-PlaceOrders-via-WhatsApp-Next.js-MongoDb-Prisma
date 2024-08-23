
const PageContainer = ({ children,center }: { children: React.ReactNode , center?:boolean }) => {
    return (
        <div className={`px-3 md:px-10 pb-4 flex-grow  ${center ? 'md:mx-40':'' }`}>
            {children}
        </div>
    )
}

export default PageContainer