
interface admin{
admin:string
}

export const Admin =({admin}:admin)=>{
    return (
        <>
        <div>
        {admin}
        </div>
        </>
    )
}