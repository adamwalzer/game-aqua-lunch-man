import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import QuitScreen from 'shared/components/quit_screen/0.2';

import TitleScreen from './components/title_screen';

//import VideoScreen from './components/video_screen';
import InfoScreenComponent from './components/info_screen_component';
import ScaleGameComponent from './components/scale_game_component';
import InfoAnswerComponent from './components/info_answer_component';
import InstructionsScreen from './components/instructions_screen';
import PlateGameComponent from './components/plate_game_component';

import {
    LEFT, RIGHT, MEAL, FOOD, SCALE_FOOD, CORRECT_FOOD, PLATE_FOOD, FOOD_TYPES
} from './components/variables';

let addHover = function (a, v, k) {
    let i = k * 2;
    a[i++] = `.${v}`;
    a[i] = `.${v}:hover`;
    return a;
};

const NAVIGATION_SELECTORS = _.reduce([
    'next-screen.play div',
    'close',
    'prev-screen div',
    'next-screen div',
    'help',
    'good-job',
], addHover, {});
const QUIT_SELECTORS = _.reduce(['quit-yes', 'quit-no'], addHover, {});
const PLATE_SELECTORS = _.reduce(FOOD_TYPES, addHover, {});
const PLATE_FOOD_SELECTORS = _.reduce(PLATE_FOOD, (a, v, k) => {
    let i = k * 4;
    a[i++] = `.${v} .food`;
    a[i++] = `.${v}:hover:not(.CORRECT) .food`;
    a[i++] = `.${v}.CORRECT .food`;
    a[i] = `.${v} .shadow`;
    return a;
}, {});

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            //VideoScreen ...no video yet,
            InfoScreenComponent(0),
            ScaleGameComponent(FOOD.WATERMELON, FOOD.PIZZA, LEFT),
            InfoAnswerComponent(FOOD.WATERMELON),
            ScaleGameComponent(FOOD.CHICKEN, FOOD.STEAK, LEFT),
            InfoAnswerComponent(FOOD.CHICKEN),
            ScaleGameComponent(FOOD.BROCCOLI, FOOD.CHEESE_SANDWICH, LEFT),
            InfoAnswerComponent(FOOD.BROCCOLI),
            ScaleGameComponent(FOOD.BREAD, FOOD.PASTA, LEFT),
            InfoAnswerComponent(FOOD.BREAD),
            ScaleGameComponent(FOOD.SODA, FOOD.APPLE_J, RIGHT),
            InfoAnswerComponent(FOOD.APPLE_J),
            ScaleGameComponent(FOOD.HAMBURGER, FOOD.EGGS, RIGHT),
            InfoAnswerComponent(FOOD.EGGS),
            ScaleGameComponent(FOOD.LAMB, FOOD.AVOCADO, RIGHT),
            InfoAnswerComponent(FOOD.AVOCADO),
            ScaleGameComponent(FOOD.BANANA, FOOD.CHOCOLATE, LEFT),
            InfoAnswerComponent(FOOD.BANANA),
            ScaleGameComponent(FOOD.TOFU, FOOD.PORK, LEFT),
            InfoAnswerComponent(FOOD.TOFU),
            InfoScreenComponent(1),
            InfoScreenComponent(2),
            InstructionsScreen,
            PlateGameComponent(MEAL.BFAST),
            PlateGameComponent(MEAL.LUNCH),
            PlateGameComponent(MEAL.DINNER),
            InfoScreenComponent(3, (
                <skoash.Image
                    className="flip"
                    src={`${ENVIRONMENT.MEDIA}6f08c8dbd137731b51bbb53fdb1c6a0a.gif`}
                />
            )),
        ]}
        menus={{
            quit: QuitScreen({
                copy: (
                    <div className="copy">
                        <h2>Are you sure you want to quit?</h2>
                        <h2>Your game progress will be saved</h2>
                    </div>
                ),
            }),
        }}
        assets={[
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg1.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg2.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg3.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg4.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite-scale.png`} />,
            <skoash.Audio
                type="sfx"
                ref="button"
                src={`${CMWN.MEDIA.EFFECT}click.mp3`}
            />,
            <skoash.Audio
                type="sfx"
                ref="screen-complete"
                src={`${MEDIA.EFFECT}arrowappear.mp3`}
            />,
            <skoash.Audio
                ref="bkg1"
                type="background"
                src={`${CMWN.MEDIA.EFFECT}bkg-g1.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg2"
                type="background"
                src={`${CMWN.MEDIA.EFFECT}bkg-g2.mp3`}
                loop
            />,
            <div className="background bkg1" />,
            <div className="background bkg2" />,
            <div className="background bkg3" />,
            <div className="background bkg4" />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}main-nav`}
                spriteClass="navigation"
                spriteGroup={2}
                frameSelectors={NAVIGATION_SELECTORS}
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}quit-sprite`}
                spriteClass="quit-button"
                spriteGroup={2}
                frameSelectors={QUIT_SELECTORS}
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}sprite-scale`}
                spriteClass="scale-item"
                spriteGroup={1}
                frameSelectors={{
                    0: '.plate',
                    1: '.plate',
                    2: '.base',
                    3: '.arm',
                }}
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}sprite-g101`}
                spriteClass="scale-food"
                spriteGroup={1}
                frameSelectors={_.map(SCALE_FOOD, v => `.${v}`)}
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}sprite-g102`}
                spriteClass="correct-food"
                spriteGroup={1}
                frameSelectors={_.map(CORRECT_FOOD, v => `.${v}`)}
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}plate-sprite`}
                spriteClass="dropzone-plate"
                spriteGroup={2}
                frameSelectors={PLATE_SELECTORS}
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}sprite2-plates01`}
                dataSrc={`${ENVIRONMENT.MEDIA}f87f1282731e1761620db4b241f26c92`}
                spriteClass="plate-food"
                spriteGroup={4}
                frameSelectors={PLATE_FOOD_SELECTORS}
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}sprites-waterdrop`}
                spriteClass="waterdrop"
                frameSelectors={{
                    0: ' .outline',
                    1: ' .blue',
                    2: ' .red',
                }}
            />,
        ]}
    />
);

if (module.hot) module.hot.accept();
