namespace Revived {
    export async function Credits(): ƒS.SceneReturn {
    // console.log("start credits");
    
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    
    await ƒS.Text.print("roll the credits");
    await ƒS.update(2);
    ƒS.Sound.fade(sounds.themes.wakeUpEnding, 0, 5);

    //temporary fix to stop the visual novel --> otherwise would continue with Scene2 again
    return "theEnd";
    }
}