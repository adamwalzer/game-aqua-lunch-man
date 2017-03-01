import Dropzone from '../shared/components/dropzone/0.6';
import Draggable from '../shared/components/draggable/0.4';
import SelectableSubList from '../shared/components/selectable_sublist/0.1';
import { MEAL, MEAL_REVEAL } from './variables';

export default function (meal) {
    var revealList = [
        <skoash.ListItem ref="next-meal">
            {MEAL_REVEAL[meal]}
        </skoash.ListItem>
    ];

    if (meal === MEAL.BFAST.NAME) {
        revealList.push(
            <skoash.ListItem ref="instructions">
                {MEAL_REVEAL.INSTRUCTIONS}
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
                <skoash.MediaCollection
                    play-{}
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
                <SelectableSubList
                    list={
                        <skoash.Repeater
                            amount={
                            item={<div />}
                            props={_.map(MEAL[meal].ITEM, item => {className: item.NAME})}
                        /> 
                    }
                />
                <Dropzone
                    ref="dropzone"
                    dropped={}
                    dragging={}
                    dropzones={[
                        <skoash.Repeater
                            amount={4}
                            item={
                                <skoash.Component />
                            }
                            props={[
                                {className: starches},
                                {className: proteins},
                                {className: beverages},
                                {className: fruitveg},
                            ]}
                        />
                    ]}
                />
                <skoash.Component>
                    <div>
                        LIMIT:<br />
                        {MEAL[meal].LIMIT} GALLONS
                    </div>
                    <div>
                        CURRENT TOTAL:<br />
                        {_.get(props, 'data.gallon.amount', 0)}
                        {_.get(props, 'data.gallon.amount', 0) === 1 ? 'GALLON' : 'GALLONS'}
                    </div>
                </skoash.Component>
                <skoash.Reveal
                    openOnStart={meal === MEAL.BFAST.NAME ? 'instructions'}
                    list={revealList}
                />
            </skoash.Screen>
        );
    }
}
