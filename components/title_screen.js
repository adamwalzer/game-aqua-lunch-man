export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            completeOnStart
            completeDelay={3000}
            backgroundAudio="bkg1"
            nextButtonClassName="play"
        >
            <skoash.Image
                className="sprite"
                src={`${CMWN.MEDIA.SPRITE}alm-title.gif`}
            />
        </skoash.Screen>
    );
}
