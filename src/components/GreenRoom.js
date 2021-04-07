// always needs to put props in as the parameter below
export default function GreenRoom(props) {

    function handleClick(){
        props.changePhrase("This text comes from Green Room")
    }

    return (
        <div className="green-room">
            <p>Green Room</p>
            <p>{props.test}</p>
            <button onClick={handleClick}>Change Phrase</button>
        </div>
    )
}
