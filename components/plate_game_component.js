import classNames from 'classnames';

import Dropzone from '../../shared/components/dropzone/0.6';
import Draggable from '../../shared/components/draggable/0.4';
import Slider from '../../shared/components/slider/0.2';
import { MEAL, MEAL_INFO, FOOD_TYPE, FOOD_INFO } from './variables';

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
            amount += foodInfo[message].AMT;

            this.updateScreenData({
                path: 'plate-food',
                data: {
                    amount,
                    dropping: message,
                    returning: null,
                },
            });
        };

        let returnDraggable = function (message) {
            let amount = _.get(props, 'data.plate-food.amount', 0);
            amount -= foodInfo[message].AMT;

            this.updateScreenData({
                path: 'plate-food',
                data: {
                    amount,
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
                <Slider
                    className="left-panel"
                    display={4}
                    freezeItem={_.get(props, 'data.plate-food.dropping', null)}
                    unfreezeItem={_.get(props, 'data.plate-food.returning', null)}
                >
                    {
                        _.map(MEAL_INFO[meal].ITEMS, (item, key) => (
                            <Draggable
                                className={`plate-food ${item}`}
                                ref={item}
                                message={item}
                                key={key}
                                returnOnIncorrect
                                stayOnCorrect={false}
                                incorrect={
                                    _.get(props, 'data.plate-food.returning', null) === item
                                }
                                children={[
                                    <div className="food" />,
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
                </Slider>
                <Slider
                    className="shadow-panel"
                    display={4}
                    adjustSlide={_.get(props, 'data.slider.firstSlide', null)}
                >
                    {
                        _.map(MEAL_INFO[meal].ITEMS, (item, key) => (
                            <div className={`plate-food ${item}`} key={key} >
                                <div className="shadow" />
                            </div>
                        ))
                    }
                </Slider>
                <Dropzone
                    ref="dropzone"
                    dropped={_.get(props, 'data.draggable.dropped', null)}
                    dragging={_.get(props, 'data.draggable.dragging', null)}
                    returning={_.get(props, 'data.draggable.returning', null)}
                    onCorrect={onCorrect}
                    acceptOne
                    dropzones={
                        _.map(FOOD_TYPE, (type) =>
                            <skoash.Component
                                className={`dropzone-plate ${type}`}
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

