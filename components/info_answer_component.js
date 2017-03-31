import { INFO_ANSWER } from './variables';

export default function (id) {

    return function (props, ref, key) {
        return (
            <skoash.Screen
                {...props}
                ref={ref}
                key={key}
                id={`answer-${id}`}
                backgroundAudio="bkg1"
            >
                <skoash.Audio
                    type="voiceOver"
                    delay={1000}
                    src={`${CMWN.MEDIA.VO}${id}.mp3`}
                />
                <skoash.Component className="circle">
                    <skoash.Image src={`${CMWN.MEDIA.IMAGE}circleframe.png`}/>
                </skoash.Component>
                <div className="text">
                    {INFO_ANSWER[id]}
                </div>
                <div className="food-container animated">
                    <div className={`correct-food ${id}`} />
                </div>
            </skoash.Screen>
        );
    };
}
