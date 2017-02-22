export default function (index) {
    const INFO = [
        {
            id: 'water',
            vo: 'SomeFoods',
            text : (
                <div>
                    Some foods need<br />
                    more water than others<br />
                    to be produced.<br /><br />
                    In this game,<br />
                    click on what food item<br />
                    you think users <br />
                    the least water.
                </div>
            ),
        },
        {
            id: 'great-job',
            vo: 'GreatJob',
            text : (
                <div>
                    <span className="soj-title">GREAT JOB!</span><br />
                    You have the power to<br />
                    help save water<br />
                    by making smart food choices!
                </div>
            ),
        },
        {
            id: 'daily-meals',
            vo: 'DailyMeals',
            text : (
                <div>
                    Now let's see<br />
                    how much water<br />
                    is used for your<br />
                    daily meals.
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
                id={`info-${INFO[index].id}`}
                backgroundAudio="BKG1"
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}${INFO[index].vo}.mp3`}
                />
                <skoash.Image
                    className="sprite"
                    src={`${CMWN.MEDIA.SPRITE}ALM_Just-Lunchman-animation1-01.gif`}
                />
                <skoash.Image
                    className="circle"
                    src={`${CMWN.MEDIA.IMAGE}circleframe.png`}
                />
                <skoash.Component className="text">
                    {INFO[index].text}
                </skoash.Component>
            </skoash.Screen>
        );
    }
}
