const NUMS = {
    1: 'one',
    2: 'two',
    3: 'three',
};

const INSTRUCTIONS = [
    (
        <div className="text">
            Drag and drop the food items to<br />
            fill each section of your plate.
        </div>
    ),
    (
        <div className="text">
            Be sure to stay<br />
            under the water usage limit.
        </div>
    ),
    (
        <div className="text">
            Let's start with the first meal<br />
            of the day: BREAKFAST!
        </div>
    ),
];

export default function (props, ref, key) {
    console.log(_.get(props, 'data.reveal.play', null));
    let closeSound = function (play = 'close') {
        let callback = null;
        if (play === 'close') callback = closeSound.bind(this, null),

        this.updateScreenData({
            path: 'reveal',
            data: {
                play,
            },
            callback,
        });

        nextInstr.call(this);
    };

    let nextInstr = function () {
        let index = _.get(props, 'data.reveal.index', -1) + 1;
        this.updateScreenData({
            path: 'reveal',
            data: {
                index,
            },
        });
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
                ref="reveal-media"
                play={`children-${_.get(props, 'data.reveal.index', null)}`}
            >
                {_.map(NUMS, (value, key) => {
                    return (
                        <skoash.Audio
                            key={key - 1}
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}step${value}.mp3`}
                        />
                    );
                })}
            </skoash.MediaCollection>
            <skoash.MediaCollection>
                ref="media"
                play={_.get(props, 'data.reveal.play', null)}
            >
                <skoash.Audio
                    type="sfx"
                    ref="close"
                    src={`${CMWN.MEDIA.EFFECT}click.mp3`}
                />
            </skoash.MediaCollection>
            <skoash.Image
                className="sprite"
                src={`${CMWN.MEDIA.IMAGE}aqualunchman.png`}
            />
            <skoash.Component className="frame">
                <div className="soj-title">INSTRUCTIONS</div>
                <skoash.Reveal
                    ref="reveal"
                    openReveal={_.get(props, 'data.reveal.index', null)}
                    start={nextInstr}
                    onClose={closeSound}
                    list={
                        _.map(NUMS, (value, key) => {
                            return (
                                <skoash.ListItem key={key - 1}>
                                    <div className="soj-title">{`STEP ${_.toUpper(value)}`}</div>
                                    {INSTRUCTIONS[key - 1]}
                                </skoash.ListItem>
                            );
                        })
                    }
                    closeButtonContent={<span>NEXT &#9658;</span>}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}

