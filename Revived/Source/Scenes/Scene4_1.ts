namespace Revived {
    export async function Scene4_1(): ƒS.SceneReturn {
    console.log("Scene4_1 starting");
    
    ƒS.Speech.hide();
    
    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sleepy, ƒS.positionPercent(30, 100));
    await ƒS.update(3);

    ƒS.Sound.fade(sounds.themes.meetingNat, 0.02, 0.5);

    await ƒS.Speech.tell(characters.narrator, "The next day...");
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0003);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0004);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update(0.5);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0005);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0006);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0007);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0008);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1.5);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.shocked, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0010);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0011);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0012);
    await ƒS.update();

    let transportChoice = {
        runToSchool: "run to school",
        takeTheBike: "take the bike"
    };

    let choiceElement = await ƒS.Menu.getInput(transportChoice, "choices");

    switch (choiceElement) {
        case transportChoice.runToSchool:
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0013);
            ƒS.Character.hide(characters.bonny);
            ƒS.Speech.hide();
            await ƒS.Location.show(locations.sidewalk);
            await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
            break;
        case transportChoice.takeTheBike:
            await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0014);
            ƒS.Speech.hide();
            dataForSave.accidentScene = 1;
            ƒS.Sound.fade(sounds.themes.meetingNat, 0, 0.5);
            return "Scene3_3";
    }

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, introLeftBorder());
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0015);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0016);

    ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, bumpingAnimationBonny());
    ƒS.Character.animate(characters.nat, characters.nat.pose.neutral, bumpingAnimationNat());
    await ƒS.Progress.delay(1.25);

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.angry, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.unknown, text.nat.scene3_2.T0001);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0003);

    await ƒS.Character.hide(characters.nat);   
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update(0.5);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.thinking, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0018);

    await ƒS.Character.hide(characters.nat);   
    await ƒS.Character.show(characters.nat, characters.nat.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.unknown, "What do you mean?");

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0019);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0020);

    await ƒS.Speech.tell(characters.unknown, "Hello?! What are you talking about?!");
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0022);

    await ƒS.Character.hide(characters.nat);   
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.unknown, text.nat.scene4_1.T0000);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0001);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0002);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0003);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0023);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0024);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0025);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0004);

    await ƒS.Character.hide(characters.nat);   
    await ƒS.Character.show(characters.nat, characters.nat.pose.laughing, ƒS.positionPercent(30, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0005);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0006);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0026);
    dataForSave.class = await ƒS.Speech.getInput();

    await ƒS.Character.hide(characters.nat);   
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0007);
    
    await ƒS.Character.hide(characters.nat);   
    await ƒS.Character.show(characters.nat, characters.nat.pose.laughing, ƒS.positionPercent(30, 100));
    await ƒS.update();
    //whitespace restrain!
    await ƒS.Speech.tell(characters.nat, "I'm supposed to be in" + dataForSave.class + " right now!");
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0009);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0027);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0010);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update();
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0028);
    
    ƒS.Speech.hide();
    ƒS.Character.hide(characters.nat);
    // await ƒS.update();

    await ƒS.Character.animate(characters.nat, characters.nat.pose.happy, outroLeftBorder());
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.happy, outroRightToLeftBorder());

    await ƒS.Progress.delay(3.5);
    await ƒS.Location.show(locations.cutScenes.class);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    ƒS.Sound.play(sounds.sfx.classroom, 0.02, false);
    ƒS.Sound.play(sounds.sfx.classroomPeople, 0.02, false);    
    await ƒS.Progress.delay(9);
    ƒS.Sound.fade(sounds.sfx.classroom, 0, 1);
    ƒS.Sound.fade(sounds.sfx.classroomPeople, 0, 1);

    ƒS.Sound.play(sounds.sfx.schoolBell, 0.01, false);    
    await ƒS.update(1);

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Location.show(locations.school);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(75, 100));
    await ƒS.Character.show(characters.nat, characters.nat.pose.happy, ƒS.positionPercent(25, 100));
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0011);
    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0012);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0029);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0030);

    await ƒS.Speech.tell(characters.nat, text.nat.scene4_1.T0013);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene4_1.T0031);

    ƒS.Speech.hide();
    await ƒS.update(1);

    await ƒS.Location.show(locations.blackScreen);
    ƒS.Character.hideAll();
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    ƒS.Sound.play(sounds.sfx.door, 0.02, false);

    await ƒS.Progress.delay(2);
    ƒS.Sound.play(sounds.sfx.pen, 0.02, false);
    await ƒS.Text.print(text.novelPage.scene4_1);
    await ƒS.Progress.delay(2);

    ƒS.Sound.fade(sounds.themes.meetingNat, 0, 2);
    ƒS.Inventory.add(items.classroom);

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(2);
    
    dataForSave.progressBar += 12.5;
    return "Scene4_2";
    }
}