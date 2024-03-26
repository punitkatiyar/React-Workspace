
function Home(){
    function User(){
        return (<h1>Hello User</h1>)
    }
    return(
        <>
        <h1>Hello Github CodeSpace And React</h1>
        <h2>Hello</h2>
        <User/>
        <button onClick={()=>alert("Hello")}></button>
        </>
    )
}
export default Home