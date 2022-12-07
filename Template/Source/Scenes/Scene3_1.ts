namespace Template {
    export async function Scene3_1(): ƒS.SceneReturn {
    console.log("Scene3_1 starting");

    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.supermarket);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, leftToRight());
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0003);

    await ƒS.Text.print(text.bonny.scene3_1.T0004);
}
}