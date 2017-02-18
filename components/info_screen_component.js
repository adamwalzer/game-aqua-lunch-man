export default function (index) {
    const TEXT = [
        {
            id: 'water',
            text : (
                <div>
                    Some foods need<br />
                    more water than others<br />
                    to be produced.<br />
                    
                    In this game,<br />
                    click on what the food item<br />
                    you think users <br />
                    the least water.
                </div>
            ),
        },
    ];


    return function (props, ref, key) {
        return (
            <skoash.Screen
                {...props}
                ref={ref}
                key={key}
                id={`info-${TEXT[index].id}`}
                backgroundAudio="BKG1"
            >
                <skoash.Image
                    className="sprite"
                    src={`${CMWN.MEDIA.SPRITE}ALM_Just-Lunchman-animation1-01.gif`}
                />
                <skoash.Image
                    className="circle"
                    src={`${CMWN.MEDIA.IMAGE}circleframe.png`}
                />
                <skoash.Component className="text">
                    {TEXT[index].text}
                </skoash.Component>
            </skoash.Screen>
        );
    }
}
