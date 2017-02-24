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
                    src={`${CMWN.MEDIA.VO}${id}.mp3`}
                />
                <skoash.Image
                    className="circle"
                    src={`${CMWN.MEDIA.IMAGE}circleframe.png`}
                />
                <skoash.Component className="text">
                    {INFO_ANSWER[id]}
                </skoash.Component>
                <div className="sprite" />
            </skoash.Screen>
        );
    }
}
