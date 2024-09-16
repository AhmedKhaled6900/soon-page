
interface props {
    children: React.ReactNode
}

const Container:React.FC<props> = ({children}) => {
    return ( 
        <div className="mx-auto max-w-7xl">
            {children}
        </div>
     );
}
 
export default Container;