import { LEFT, RIGHT } from './variables';

export default function (foodleft, foodright, correct = LEFT) {
    return function (props, ref, key) {
        let openMedia = function () {
            let choice = _.get(props, 'data.selectable.target', null);
            if (!choice) return;
    
            return choice === correct ? 'scale right' : 'scale wrong';
        };
    
        let openIcon = function (side) {
            return _.get(props, 'data.selectable.target', null) === side ? "icon" : null;
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
                    src={`${CMWN.MEDIA.VO}${`${_.capitalize(foodleft)}${_.capitalize(foodright)}`}.mp3`}
                />
                <skoash.MediaCollection
                    open={openMedia()}
                >
                    <skoash.Audio
                        type="sfx"
                        ref="right"
                        src={`${CMWN.MEDIA.EFFECT}Right_G1.mp3`}
                    />
                    <skoash.Audio
                        type="sfx"
                        ref="wrong"
                        src={`${CMWN.MEDIA.EFFECT}Wrong_G1.mp3`}
                    />
                    <skoash.Audio
                        type="sfx"
                        ref="scale"
                        src={`${CMWN.MEDIA.EFFECT}Scale.mp3`}
                    />
                </skoash.MediaCollection>
                <div className="soj-title">WHICH TAKES LESS WATER TO PRODUCE?</div>
                <skoash.Reveal
                    openReveal={_.get(props, 'data.selectable.target', null) !== null ? correct : null}
                    openOnStart="balance"
                    list={[
                        <skoash.Image
                            ref="balance"
                            src={`${CMWN.MEDIA.IMAGE}balanceSCALE.png`}
                        />,
                        <skoash.Image
                            ref={LEFT}
                            src={`${CMWN.MEDIA.IMAGE}leftSCALE.png`}
                        />,
                    ]}
                />
                <skoash.Selectable
                    ref="selectable"
                    dataTarget="selectable"
                    list={[
                        <skoash.Component className={foodleft}>
                            <skoash.Reveal
                                open={openIcon(LEFT)}
                                list={[
                                    <skoash.Component ref="icon"/>
                                ]}
                            />
                        </skoash.Component>,
                        <skoash.Component className={foodright}>
                            <skoash.Reveal
                                open={openIcon(RIGHT)}
                                list={[
                                    <skoash.Component ref="icon"/>
                                ]}
                            />
                        </skoash.Component>,
                    ]}
                />
            </skoash.Screen>
        );
    }
}
