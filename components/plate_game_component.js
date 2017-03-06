import Dropzone from '../../shared/components/dropzone/0.6';
import Draggable from '../../shared/components/draggable/0.4';
import { MEAL, MEAL_INFO, FOOD_TYPE } from './variables';

const INSTRUCTIONS = 'instructions';

export default function (meal) {
    let revealList = [
        <skoash.ListItem ref="next-meal" className={meal}>
            {MEAL_INFO[meal].REVEAL}
        </skoash.ListItem>
    ];

    if (meal === MEAL.BFAST) {
        revealList.push(
            <skoash.ListItem ref={INSTRUCTIONS} className={INSTRUCTIONS}>
                {MEAL_INFO[INSTRUCTIONS]}
            </skoash.ListItem>
        );
    }

    return function (props, ref, key) {
        return (
            <skoash.Screen
                {...props}
                ref={ref}
                key={key}
                id={`plate-${meal}`}
                backgroundAudio="bkg2"
            >
                <skoash.SpriteCSS
                    src={`${CMWN.MEDIA.SPRITE}plate-sprite`} 
                    spriteClass="plate"
                    frameSelectors={{
                        0: `.${FOOD_TYPE.FRUITVEG}`,
                        1: `.${FOOD_TYPE.FRUITVEG}:hover`,
                        2: `.${FOOD_TYPE.STARCH}`,
                        3: `.${FOOD_TYPE.STARCH}:hover`,
                        4: `.${FOOD_TYPE.PROTEIN}`,
                        5: `.${FOOD_TYPE.PROTEIN}:hover`,
                        6: `.${FOOD_TYPE.BEV}`,
                        7: `.${FOOD_TYPE.BEV}:hover`,
                    }}
                />
                <skoash.MediaCollection
                    play={null}
                >
                    <skoash.Audio
                        type="sfx"
                        ref="filing"
                        src={`${CMWN.MEDIA.EFFECT}waterfilling.mp3`}
                        complete
                    />
                    <skoash.Audio
                        type="sfx"
                        ref="exceeded"
                        src={`${CMWN.MEDIA.EFFECT}waterexceeded.mp3`}
                        complete
                    />
                </skoash.MediaCollection>
                <div className="soj-title">{_.toUpper(meal)}</div>
                <skoash.Slider
                    className="left-panel"
                    orientation="vertical"
                    display={4}
                >
                    {_.map(MEAL_INFO[meal].ITEMS, (item) => <div className={`food ${item.NAME}`} />)}
                </skoash.Slider>
                <Dropzone
                    ref="dropzone"
                    dropped={null}
                    dragging={null}
                    dropzones={_.map(FOOD_TYPE, (type) => <div className={`plate ${type}`} />)}
                />
                <skoash.Component className="right-panel">
                    <div>
                        LIMIT:<br />
                        {MEAL_INFO[meal].LIMIT} GALLONS
                        <div className="waterdrop" />
                        CURRENT TOTAL:<br />
                        {_.get(props, 'data.gallon.amount', 0)}
                        {' '}
                        {_.get(props, 'data.gallon.amount', 0) === 1 ? 'GALLON' : 'GALLONS'}
                    </div>
                </skoash.Component>
                <skoash.Reveal
                    openOnStart={meal === MEAL.BFAST ? INSTRUCTIONS : null}
                    list={revealList}
                />
            </skoash.Screen>
        );
    }
}


