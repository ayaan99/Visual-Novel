namespace Revived {
    export async function Scene7(): ƒS.SceneReturn {
    console.log("Scene7 starting");
    
    dataForSave.progressBar += 11.111;

    ƒS.Speech.hide();
    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.emptyStreet.normal);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    await ƒS.Progress.delay(3);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0004);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0005);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene7.T0006);

    ƒS.Speech.clear();
    ƒS.Speech.hide();

    await ƒS.Progress.delay(1);

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    switch (dataForSave.ending) {
        case 0:
            return EndingDenial();
        case 1:
            return EndingAcceptance();
    }
 
    }
}