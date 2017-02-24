const NUMS = {
    1: 'one',
    2: 'two',
    3: 'three',
};

const INSTRUCTIONS = [
    (
        <div>
            Drag and drop the food items to<br />
            fill each section of your plate.
        </div>
    ),
    (
        <div>
            Be sure to stay
            under the water usage limit.
        </div>
    ),
    (
        <div>
            Let's start with the first meal
            of the day: BREAKFAST!
        </div>
    ),
];

export default function (props, ref, key) {
    let openNextInstr = function () {
        return null;
    };

    let playMedia = function () {
        return null;
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="instructions"
            backgroundAudio="bkg1"
        >
            <skoash.MediaCollection
                ref="media"
                play={playMedia()}
            >
                {_.map(NUMS, (value, key) => {
                    return (
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}step${value}.mp3`}
                            key={key}
                        />
                    );
                })}
            </skoash.MediaCollection>
            <skoash.Image
                className="sprite"
                src={`${CMWN.MEDIA.IMAGE}aqualunchman.png`}
            />
            <skoash.Reveal
                ref="reveal"
                openReveal={openNextInstr()}
                openOnStart={0}
                list={
                    _.map(NUMS, (value, key) => {
                        return (
                            <skoash.ListItem className="frame" key={key}>
                                <div className="soj-title">
                                    {
                                        `INSTRUCTIONS<br />
                                        STEP ${_.toUpper(value)}`
                                    }
                                </div>
                                {INSTRUCTIONS[key]}
                                <div className="next" />
                            </skoash.ListItem>
                        );
                    })
                }
            />
        </skoash.Screen>
    );
}

