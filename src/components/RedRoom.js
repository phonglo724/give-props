import BlueRoom from './BlueRoom.js'

// always needs to put props in as the parameter below
export default function RedRoom(props) {
    return (
        <div className="red-room">
            <p>Red Room</p>
            <p>{props.phrase}</p>
            <BlueRoom changePhrase={props.changePhrase} phrase={props.phrase}/>
        </div>
    )
}
