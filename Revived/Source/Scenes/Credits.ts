namespace Revived {
    export async function Credits(): ƒS.SceneReturn {
    console.log("start credits");
    
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    
    ƒS.Text.addClass("start");
    // tslint:disable-next-line: quotemark
    await ƒS.Text.print('<h2>Credits</h2>For the visual novel "Revived" created in WiSe22/23, all visual content was drawn by myself. <br><br> Transitions by Kia <br> (https://lemmasoft.renai.us/forums/viewtopic.php?f=52&t=37628)<br><br> Music: <br> bensound.com/royalty-free-music <br> sivermansound.com <br><br> Audio: <br> zapsplat.com <br> library.prosoundeffects.com');
    await ƒS.update(2);
    ƒS.Sound.fade(sounds.themes.wakeUpEnding, 0, 5);

    }
}