const NUMS = {
    1: 'one',
    2: 'two',
    3: 'three',
};

const INSTRUCTIONS = [
    (
    <div className="text animated">
            Drag and drop the food items to<br />
            fill each section of your plate.
        </div>
    ),
    (
    <div className="text animated">
            Be sure to stay<br />
            under the water usage limit.
        </div>
    ),
    (
    <div className="text animated">
            Let's start with the first meal<br />
            of the day: BREAKFAST!
        </div>
    ),
];

export default function (props, ref, key) {
    let closeSound = function () {
        let play = 'close';

        this.updateScreenData({
            path: 'reveal',
            data: {
                play,
            },
            callback: nextInstr.bind(this),
        });
    };

    let nextInstr = function () {
        let index = _.get(props, 'data.reveal.index', -1) + 1;

        this.updateScreenData({
            path: 'reveal',
            data: {
                index,
                play: null,
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
                play={`children-${_.get(props, 'data.reveal.index', null)}`}
            >
                {_.map(NUMS, (v, k) => {
                    return (
                        <skoash.Audio
                            key={k - 1}
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}step${v}.mp3`}
                        />
                    );
                })}
            </skoash.MediaCollection>
            <skoash.MediaCollection
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
                        _.map(NUMS, (v, k) => {
                            return (
                                <skoash.ListItem key={k - 1}>
                                    <div className="soj-title animated">
                                        {`STEP ${_.toUpper(v)}`}
                                    </div>
                                    {INSTRUCTIONS[k - 1]}
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

