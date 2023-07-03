export default function CardContainer({children} ){
   
    return (<>
    <div className="container-cards">
        <div className="content-card">
            {children}
        </div>
    </div>
    </>)
}
