namespace Revived {
    export async function Scene7(): ƒS.SceneReturn {
    console.log("Scene7 starting");
    
    ƒS.Speech.hide();

    await ƒS.Location.show(locations.emptyStreet.normal);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    ƒS.Sound.play(sounds.sfx.footstepsConcrete, 0.2, false);
    await ƒS.Progress.delay(5);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0004);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0005);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0006);

    ƒS.Sound.fade(sounds.sfx.footstepsConcrete, 0, 1);

    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.Progress.delay(1);

    if (dataForSave.progressBar == 50) {
        dataForSave.progressBar += 25;
    } else if (dataForSave.progressBar == 66.7) {
        dataForSave.progressBar += 16.7;
    } else if (dataForSave.progressBar == 75) {
        dataForSave.progressBar += 12.5;
    }

    switch (dataForSave.ending) {
        case 0:
            await ƒS.Location.show(locations.blackScreen);
            await ƒS.update(3);
            ƒS.Sound.fade(sounds.themes.park, 0, 3);
            return "EndingDenial";
        case 1:
            await ƒS.Location.show(locations.blackScreen);
            await ƒS.update(3);
            ƒS.Sound.fade(sounds.themes.park, 0, 3);
            return "EndingAcceptance";
    }
 
    }
}