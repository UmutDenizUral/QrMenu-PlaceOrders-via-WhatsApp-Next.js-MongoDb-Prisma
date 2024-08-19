

const WarningText = ({text}:{text:string}) => {
    return (
      <div className="text-lg h-screen w-full flex items-center justify-center text-red-600">
          {text}
      </div>
    )
  }
  
  export default WarningText