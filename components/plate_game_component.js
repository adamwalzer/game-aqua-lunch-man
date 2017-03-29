import Dropzone from '../../shared/components/dropzone/0.6';
import Draggable from '../../shared/components/draggable/0.4';
import Slider from '../../shared/components/slider/0.2';
import { MEAL, MEAL_INFO, FOOD_TYPE, FOOD_INFO } from './variables';

const STARCH = _.reduce(FOOD_INFO, (arr, info, name) => {
    if (info.TYPE === FOOD_TYPE.STARCH) { arr.push(name); } return arr;
}, []);

const PROTEIN = _.reduce(FOOD_INFO, (arr, info, name) => {
    if (info.TYPE === FOOD_TYPE.PROTEIN) { arr.push(name); } return arr;
}, []);

const FRUITVEG = _.reduce(FOOD_INFO, (arr, info, name) => {
    if (info.TYPE === FOOD_TYPE.FRUITVEG) { arr.push(name); } return arr;
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

const FILL = 'filling';
const EXCEED = 'exceeded';
const INSTRUCTIONS = 'instructions';

export default function (meal) {
    const NEXT = meal === MEAL.BFAST ? 'lunch' : (meal === MEAL.LUNCH ? 'dinner' : 'thankyou');

    let revealList = [
        <skoash.ListItem ref={NEXT} className={NEXT}>
            {MEAL_INFO[meal].REVEAL}
        </skoash.ListItem>
    ];

    let revealAssets = [
        <skoash.Audio
            type="voiceOver"
            ref={NEXT}
            src={`${CMWN.MEDIA.VO}${NEXT}.mp3`}
        />
    ];

    if (meal === MEAL.BFAST) {
        revealList.push(
            <skoash.ListItem ref={INSTRUCTIONS} className={INSTRUCTIONS}>
                {MEAL_INFO[INSTRUCTIONS]}
            </skoash.ListItem>
        );
        revealAssets.push(
            <skoash.MediaSequence
                ref={INSTRUCTIONS}
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}${INSTRUCTIONS}.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}draganddrop.mp3`}
                />
            </skoash.MediaSequence>
        );
    }

    return function (props, ref, key) {
        const AMOUNT = _.get(props, 'data.plate-food.amount', 0);
        const DRAG = _.get(props, 'data.draggable.dragging', null);
        const DRAG_DROP = _.get(props, 'data.draggable.dropped', null);
        const DRAG_RETURN = _.get(props, 'data.draggable.returning', null);
        const PLATE_DROP = _.get(props, 'data.plate-food.dropping', null);
        const PLATE_RETURN = _.get(props, 'data.plate-food.returning', null);
        const WATER_AUDIO = _.get(props, 'data.water.audio', null);
        const FIRST_SLIDE = _.get(props, 'data.slider.firstSlide', null);
        const DROPZONE_COMPLETE = _.get(props, 'data.dropzone.complete', null);
        const REVEAL_OPEN = _.get(props, 'data.reveal.open', null);

        let foodInfo = FOOD_INFO; // make available to functions below

        let onCorrect = function (dropped, dropzoneRef) {
            let message = dropped.props.message;
            let amount = AMOUNT;
            let audio = EXCEED;
            amount += foodInfo[message].AMT;

            if (amount < MEAL_INFO[meal].LIMIT) {
                audio = FILL;
                dropzoneRef.complete();
            }

            this.updateScreenData({
                path: 'plate-food',
                data: {
                    amount,
                    dropping: message,
                    returning: null,
                },
            });

            waterAudio.call(this, audio, waterAudio.bind(this, 'dummy', _.noop));
        };

        let waterAudio = function (audio, callback) {
            this.updateScreenData({
                path: 'water',
                data: {
                    audio,
                },
                callback,
            });
        };

        let onRemove = function (item, dropzoneRef) {
            if (!dropzoneRef.contains.length) {
                dropzoneRef.incomplete();
            }
        };

        let onDropzoneComplete = function () {
            this.updateScreenData({
                path: 'dropzone',
                data: {
                    complete: NEXT,
                },
            });
        };

        let returnDraggable = function (message) {
            let amount = AMOUNT;
            if (message) {
                amount = Math.max(0, amount - foodInfo[message].AMT);
            }

            this.updateScreenData({
                path: 'plate-food',
                data: {
                    amount,
                    dropping: null,
                    returning: message,
                }
            });
        };

        let onCloseReveal = function (prev) {
            if (prev === INSTRUCTIONS) return;

            skoash.trigger('goto', { index: props.index + 1 });
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
                    play={WATER_AUDIO}
                >
                    <skoash.Audio
                        type="sfx"
                        ref={FILL}
                        src={`${CMWN.MEDIA.EFFECT}waterfilling.mp3`}
                        complete
                    />
                    <skoash.Audio
                        type="sfx"
                        ref={EXCEED}
                        src={`${CMWN.MEDIA.EFFECT}waterexceeded.mp3`}
                        complete
                    />
                </skoash.MediaCollection>
                <div className="soj-title">{_.toUpper(meal)}</div>
                <Slider
                    className="left-panel"
                    display={4}
                    freezeItem={PLATE_DROP}
                    unfreezeItem={PLATE_RETURN}
                >
                    {
                        _.map(MEAL_INFO[meal].ITEMS, (item, k) => (
                            <Draggable
                                className={`plate-food ${item}`}
                                ref={item}
                                message={item}
                                key={k}
                                returnOnIncorrect
                                stayOnCorrect={false}
                                incorrect={PLATE_RETURN === item}
                                onStart={function () { this.markIncorrect(); }}
                            >
                                <div className="food" />
                                <skoash.Reveal
                                    openReveal={
                                        PLATE_DROP === item ? item : null
                                        // boolean check necessary
                                        // only want close-reveal to appear on dropped item
                                    }
                                    list={[<skoash.ListItem ref="item" />]}
                                    onClose={returnDraggable}
                                    complete
                                    checkComplete={false}
                                    closeButtonContent={<div>&times;</div>}
                                />
                            </Draggable>
                        ))
                    }
                </Slider>
                <Slider
                    className="shadow-panel"
                    display={4}
                    adjustSlide={FIRST_SLIDE}
                >
                    {
                        _.map(MEAL_INFO[meal].ITEMS, (item, k) => (
                            <div className={`plate-food ${item}`} key={k} >
                                <div className="shadow" />
                            </div>
                        ))
                    }
                </Slider>
                <Dropzone
                    ref="dropzone"
                    dropped={DRAG_DROP}
                    dragging={DRAG}
                    returning={DRAG_RETURN}
                    onCorrect={onCorrect}
                    onRemove={onRemove}
                    onComplete={onDropzoneComplete}
                    acceptNum={1}
                    clearOnStart
                    assets={[
                        <skoash.Audio
                            type="sfx"
                            ref="drag"
                            src={`${CMWN.MEDIA.EFFECT}drag.mp3`}
                        />,
                        <skoash.Audio
                            type="sfx"
                            ref="correct"
                            src={`${CMWN.MEDIA.EFFECT}dropfood-g2.mp3`}
                        />,
                    ]}
                    dropzones={
                        _.map(FOOD_TYPE, (type) =>
                            <skoash.ListItem
                                className={`dropzone-plate ${type}`}
                                data-ref={type}
                                answers={DROPZONE_ANSWERS[type]}
                                correct
                            />)
                    }
                />
                <skoash.Component className="right-panel">
                    <skoash.Component>
                        <div>
                            LIMIT:<br />
                            {MEAL_INFO[meal].LIMIT} GALLONS
                        </div>
                        <skoash.Reveal
                            openReveal={ AMOUNT >= MEAL_INFO[meal].LIMIT ? 'warn' : null }
                            closeReveal={ AMOUNT < MEAL_INFO[meal].LIMIT }
                            complete
                            hideCloseButton
                            list={[
                                <skoash.ListItem ref="warn" >
                                    <div>TOO MUCH WATER</div>
                                </skoash.ListItem>
                            ]}
                        />
                        <div className="waterdrop" >
                            <div className="outline" />
                            <div className="blue" />
                            <div
                                className="mask"
                                style={{
                                    'height': Math.max(100 - (Math.floor(100 *
                                        (AMOUNT / MEAL_INFO[meal].LIMIT))), 0) + '%',
                                }}
                            >
                                <div className="outline" />
                            </div>
                            <div className="red" />
                        </div>
                        <br />
                        <div>
                            CURRENT TOTAL:<br />
                            {`${AMOUNT} ${AMOUNT === 1 ? 'GALLON' : 'GALLONS'}`}
                        </div>
                    </skoash.Component>
                </skoash.Component>
                <skoash.MediaCollection
                    play={REVEAL_OPEN}
                >
                    {revealAssets}
                </skoash.MediaCollection>
                <skoash.Reveal
                    openOnStart={meal === MEAL.BFAST ? INSTRUCTIONS : null}
                    openReveal={DROPZONE_COMPLETE}
                    list={revealList}
                    openTarget="reveal"
                    onClose={onCloseReveal}
                    hideCloseButton={meal === MEAL.DINNER}
                    closeButtonClassName="next-screen"
                    closeButtonContent={<div />}
                />
            </skoash.Screen>
        );
    };
}

