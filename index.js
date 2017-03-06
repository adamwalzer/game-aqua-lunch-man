import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import QuitScreen from 'shared/components/quit_screen/0.1';

import TitleScreen from './components/title_screen';
import VideoScreen from './components/video_screen';
import InfoScreenComponent from './components/info_screen_component';
import ScaleGameComponent from './components/scale_game_component';
import InfoAnswerComponent from './components/info_answer_component';
import InstructionsScreen from './components/instructions_screen';
import PlateGameComponent from './components/plate_game_component';

import {LEFT, RIGHT, MEAL} from './components/variables';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            //VideoScreen,
            //InfoScreenComponent(0),
            //ScaleGameComponent('watermelon', 'pizza', LEFT),
            //InfoAnswerComponent('watermelon'),
            //ScaleGameComponent('chicken', 'steak', LEFT),
            //InfoAnswerComponent('chicken'),
            //ScaleGameComponent('broccoli', 'cheese', LEFT),
            //InfoAnswerComponent('broccoli'),
            //ScaleGameComponent('wheat', 'pasta', LEFT),
            //InfoAnswerComponent('wheatbread'),
            //ScaleGameComponent('soda', 'applejuice', RIGHT),
            //InfoAnswerComponent('applejuice'),
            //ScaleGameComponent('hamburger', 'eggs', RIGHT),
            //InfoAnswerComponent('eggs'),
            //ScaleGameComponent('lamb', 'avocado', RIGHT),
            //InfoAnswerComponent('avocado'),
            //ScaleGameComponent('banana', 'chocolate', LEFT),
            //InfoAnswerComponent('banana'),
            //ScaleGameComponent('tofu', 'pork', LEFT),
            //InfoAnswerComponent('tofu'),
            //InfoScreenComponent(1),
            //InfoScreenComponent(2),
            //InstructionsScreen,
            PlateGameComponent(MEAL.BFAST),
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg1.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg2.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg3.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}bkg4.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite-scale.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprites-waterdrop.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite2-plates01.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite-g101.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite-g102.png`} />,
            <skoash.Audio type="sfx" ref="button" src={`${CMWN.MEDIA.EFFECT}click.mp3`} />,
            <skoash.Audio type="sfx" ref="screen-complete" src={`${MEDIA.EFFECT}arrowappear.mp3`} />,
            <skoash.Audio ref="bkg1" type="background" src={`${CMWN.MEDIA.EFFECT}bkg-g1.mp3`} loop />,
            <skoash.Audio ref="bkg2" type="background" src={`${CMWN.MEDIA.EFFECT}bkg-g2.mp3`} loop />,
            <div className="background bkg1" />,
            <div className="background bkg2" />,
            <div className="background bkg3" />,
            <div className="background bkg4" />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}main-nav`}
                spriteClass="nav"
                frameSelectors={{
                     0: '.play',
                     1: '.play:hover',
                     2: '.close',
                     3: '.close:hover',
                     4: '.prev-screen',
                     5: '.prev-screen:hover',
                     6: '.next-screen',
                     7: '.next-screen:hover',
                     8: '.help',
                     9: '.help:hover',
                    10: '.good-job',
                    11: '.good-job:hover',
                }}
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}quit-sprite`}
                spriteClass="quit"
                frameSelectors={{
                    0: '.yes',
                    1: '.yes:hover',
                    2: '.no',
                    3: '.no:hover',
                }}
            />,
        ]}
    />
);

if (module.hot) module.hot.accept();
