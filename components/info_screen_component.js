import { INFO_SCREEN } from './variables';

export default function (index, trailingComponents) {
    return function (props, ref, key) {
        return (
            <skoash.Screen
                {...props}
                ref={ref}
                key={key}
                id={`info-${INFO_SCREEN[index].vo}`}
                backgroundAudio="bkg1"
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}${INFO_SCREEN[index].vo}.mp3`}
                />
                <skoash.Image
                    className="sprite"
                    src={`${CMWN.MEDIA.IMAGE}aqualunchman.png`}
                />
                <skoash.Image
                    className="circle"
                    src={`${CMWN.MEDIA.IMAGE}circleframe.png`}
                />
                <skoash.Component className="text">
                    {INFO_SCREEN[index].text}
                </skoash.Component>
                {trailingComponents}
            </skoash.Screen>
        );
    };
}
