import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';
import QuitScreen from 'shared/components/quit_screen/0.1';

import TitleScreen from './components/title_screen';
import VideoScreen from './components/video_screen';
import InfoScreenComponent from './components/info_screen_component';

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
			TitleScreen,
			VideoScreen,
			InfoScreenComponent(0),
			InfoScreenComponent(1),
			InfoScreenComponent(2),
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}BKG.1.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}BKG.2.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}BKG.3.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}BKG.4.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}main.nav.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}plate.sprite.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.scale.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprites.waterdrop.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite2.plates_01.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite1.big.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.g101.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.g102.png`} />,
            <skoash.Audio type="sfx" ref="button" src={`${CMWN.MEDIA.EFFECT}Click.mp3`} />,
            <skoash.Audio type="sfx" ref="screen-complete" src={`${MEDIA.EFFECT}ArrowAppear.mp3`} />,
            <skoash.Audio ref="BKG1" type="background" src={`${CMWN.MEDIA.EFFECT}BKG_G1.mp3`} loop />,
            <skoash.Audio ref="BKG2" type="background" src={`${CMWN.MEDIA.EFFECT}BKG_G2.mp3`} loop />,
            <div className="background bkg1" />,
            <div className="background bkg4" />,
        ]}
    />
);

if (module.hot) module.hot.accept();
