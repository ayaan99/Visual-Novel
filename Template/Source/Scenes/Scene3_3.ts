namespace Template {
    export async function Scene3_3(): ƒS.SceneReturn {
    console.log("Scene3_3 starting");
    
    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.supermarket);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.upset, leftToRight());
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0004);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_3.T0005);

    }
}