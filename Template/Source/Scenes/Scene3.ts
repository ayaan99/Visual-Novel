namespace Template {
    export async function Scene3(): ƒS.SceneReturn {
    console.log("Scene3 starting");

    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.toDoList);
    // await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, "test scene 3");

}
}