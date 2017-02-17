export default function (props, ref, key) {
    // TODO add video AIM 2/17/17
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video"
        >
            <skoash.Component className="video">
            </skoash.Component>
        </skoash.Screen>
    );
}
