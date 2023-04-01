export default function Tooltip(props) {
    return (
        // giving 'id' depending upon the 'dir' state value
        <span className="tooltip" id={`tooltip-${props.dir}`}>I'm a Tooltip</span>
    )
}