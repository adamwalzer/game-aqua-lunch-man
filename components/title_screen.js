export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            completeOnStart
            completeDelay={3000}
            backgroundAudio="BKG1"
        >
            <skoash.Image
                className="sprite"
                src={`${CMWN.MEDIA.SPRITE}AquaLunchMan.gif`}
            />
        </skoash.Screen>
    );
}
