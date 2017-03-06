import Dropzone from '../../shared/components/dropzone/0.6';
import Draggable from '../../shared/components/draggable/0.4';
import { MEAL, MEAL_INFO, FOOD, FOOD_TYPE, FOOD_INFO } from './variables';

const INSTRUCTIONS = 'instructions';

const STARCH = _.reduce(FOOD_INFO, (arr, info, name) => {
    if (info.TYPE === FOOD_TYPE.STARCH) { arr.push(name); } return arr;
}, []);

const PROTEIN = _.reduce(FOOD_INFO, (arr, info, name) => {
    if (info.TYPE === FOOD_TYPE.PROTEIN) { arr.push(name); } return arr;
}, []);

const FRUITVEG = _.reduce(FOOD_INFO, (arr, info, name) => {
    if (info.TYPE === FOOD_TYPE.FRUITVEG) { arr.push(name) } return arr;
}, []);

const BEV = _.reduce(FOOD_INFO, (arr, info, name) => {
    if (info.TYPE === FOOD_TYPE.BEV) { arr.push(name); } return arr;
}, []);

const DROPZONE_ANSWERS = {
    [FOOD_TYPE.STARCH]: STARCH,
    [FOOD_TYPE.PROTEIN]: PROTEIN,
    [FOOD_TYPE.FRUITVEG]: FRUITVEG,
    [FOOD_TYPE.BEV]: BEV,
};


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
        console.log(props.data);
        let foodInfo = FOOD_INFO; // make available to functions below

        let onCorrect = function (dropped, dropzoneRef) {
            let message = dropped.props.message;
            let amount = _.get(props, 'data.plate-food.amount', 0);
            let all = _.get(props, 'data.plate-food.all', []);
            amount += foodInfo[message].AMT;
            all.push(message);

            this.updateScreenData({
                path: 'plate-food',
                data: {
                    amount,
                    all,
                    dropping: message,
                    returning: null,
                },
            });
        };

        let returnDraggable = function (message) {
            let amount = _.get(props, 'data.plate-food.amount', 0);
            let all = _.get(props, 'data.plate-food.all', []);
            amount -= foodInfo[message].AMT;
            _.remove(all, (val) => val === message);

            this.updateScreenData({
                path: 'plate-food',
                data: {
                    amount,
                    all,
                    dropping: null,
                    returning: message,
                }
            });
        };

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
                    freezeItem={_.get(props, 'data.plate-food.all', null)}
                >
                    {
                        _.map(MEAL_INFO[meal].ITEMS, (item, key) => (
                            <Draggable
                                className={`food ${item}`}
                                ref={item}
                                message={item}
                                key={key}
                                returnOnIncorrect
                                stayOnCorrect={false}
                                incorrect={
                                    _.get(props, 'data.plate-food.returning', null) === item
                                }
                                children={[
                                    <skoash.Reveal
                                        openReveal={
                                            _.get(props, 'data.plate-food.dropping', null) === item ?
                                                item : null // boolean check necessary
                                            // only want close-reveal to appear on dropped item
                                        }
                                        list={[<skoash.ListItem ref="item" />]}
                                        onClose={returnDraggable}
                                    />
                                ]}
                            />
                        ))
                    }
                </skoash.Slider>
                <Dropzone
                    ref="dropzone"
                    dropped={_.get(props, 'data.draggable.dropped', null)}
                    dragging={_.get(props, 'data.draggable.dragging', null)}
                    onCorrect={onCorrect}
                    acceptOne
                    dropzones={
                        _.map(FOOD_TYPE, (type) =>
                            <skoash.Component
                                className={`block-plate ${type}`}
                                data-ref={type}
                                answers={DROPZONE_ANSWERS[type]}
                            />)
                    }
                />
                <skoash.Component className="right-panel">
                    <div>
                        LIMIT:<br />
                        {MEAL_INFO[meal].LIMIT} GALLONS
                        <div className="waterdrop" />
                        <skoash.Reveal
                            openReveal={
                                _.get(props, 'data.plate-food.amount', 0) >= MEAL_INFO[meal].LIMIT ?
                                    'warn' : null
                            }
                            closeReveal={
                                _.get(props, 'data.plate-food.amount', 0) < MEAL_INFO[meal].LIMIT
                            }
                            list={[
                                <skoash.ListItem ref="warn" >
                                    <div>TOO MUCH WATER</div>
                                </skoash.ListItem>
                            ]}
                        />
                        CURRENT TOTAL:<br />
                        {_.get(props, 'data.plate-food.amount', 0)}
                        {' '}
                        {_.get(props, 'data.plate-food.amount', 0) === 1 ? 'GALLON' : 'GALLONS'}
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

