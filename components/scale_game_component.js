import { LEFT, RIGHT } from './variables';

export default function (foodleft, foodright, correct = LEFT) {
    return function (props, ref, key) {
        let openMedia = function () {
            let choice = _.get(props, 'data.selectable.target.props.data-ref', null);
            if (!choice) return;
    
            return choice === correct ? 'scale right' : 'scale wrong';
        };

        let openIcon = function (side) {
            let result = _.get(props, 'data.selectable.target.props.data-ref', null) === side ?
                "icon" : null;
            return result;
        };

        let changeScale = function () {
            let result =  _.get(props, 'data.selectable.target.props.data-ref', null) !== null ?
                correct : null
            return result;
        };

        return (
            <skoash.Screen
                {...props}
                ref={ref}
                key={key}
                id={`scale-${foodleft}-${foodright}`}
                backgroundAudio="BKG1"
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}${`${foodleft}${foodright}`}.mp3`}
                />
                <skoash.MediaCollection
                    play={openMedia()}
                >
                    <skoash.Audio
                        type="sfx"
                        ref="right"
                        src={`${CMWN.MEDIA.EFFECT}right-g1.mp3`}
                        complete
                    />
                    <skoash.Audio
                        type="sfx"
                        ref="wrong"
                        src={`${CMWN.MEDIA.EFFECT}wrong-g1.mp3`}
                        complete
                    />
                    <skoash.Audio
                        type="sfx"
                        ref="scale"
                        src={`${CMWN.MEDIA.EFFECT}scale.mp3`}
                    />
                </skoash.MediaCollection>
                <div className="soj-title">WHICH TAKES LESS WATER TO PRODUCE?</div>
                <skoash.Reveal
                    openReveal={changeScale()}
                    closeReveal={changeScale()}
                    openOnStart="balance"
                    complete
                    checkComplete={false}
                    list={[
                        <skoash.ListItem
                            ref="balance"
                        />,
                        <skoash.ListItem
                            ref={RIGHT}
                        />,
                        <skoash.ListItem
                            ref={LEFT}
                        />,
                    ]}
                />
                <skoash.Selectable
                    ref="selectable"
                    dataTarget="selectable"
                    chooseOne
                    list={[
                        <skoash.Component
                            data-ref={LEFT}
                            className={(correct === LEFT ? 'correct ' : 'incorrect ') + foodright}
                        >
                            <skoash.Reveal
                                openReveal={openIcon(LEFT)}
                                complete
                                checkComplete={false}
                                list={[
                                    <skoash.ListItem
                                        ref="icon"
                                    />
                                ]}
                            />
                        </skoash.Component>,
                        <skoash.Component
                            data-ref={RIGHT}
                            className={(correct === RIGHT ? 'correct ' : 'incorrect ') + foodright}
                        >
                            <skoash.Reveal
                                openReveal={openIcon(RIGHT)}
                                complete
                                checkComplete={false}
                                list={[
                                    <skoash.ListItem
                                        ref="icon"
                                    />
                                ]}
                            />
                        </skoash.Component>,
                    ]}
                />
            </skoash.Screen>
        );
    }
}
