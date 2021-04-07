import GreenRoom from './GreenRoom.js'

// always needs to put props in as the parameter below
export default function BlueRoom(props) {
    return (
        <div className="blue-room">
            <p>Blue Room</p>
            <p>{props.phrase}</p>
            <GreenRoom changePhrase={props.changePhrase} test="UwU" />
        </div>
    )
}
