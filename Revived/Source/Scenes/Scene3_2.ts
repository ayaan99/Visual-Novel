namespace Revived {
    export async function Scene3_2(): ƒS.SceneReturn {
    console.log("Scene3_2 starting");

    dataForSave.progressBar += 11.111;

    ƒS.Speech.hide();
    // ƒS.Sound.play(sounds.afterlifeSoundBeginning, 0.1, true);
    await ƒS.Location.show(locations.busyStreet.normal);
    await ƒS.update(transitions.bigWipe.duration, transitions.bigWipe.alpha, transitions.bigWipe.edge);
    await ƒS.Progress.delay(3); 

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Location.show(locations.supermarket);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, introLeftBorder());
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_1.T0002);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0001);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0002);
    
    //bonny and nat bumping into each other
    ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, bumpingAnimationBonny());
    ƒS.Character.animate(characters.nat, characters.nat.pose.neutral, bumpingAnimationNat());
    await ƒS.Progress.delay(1.25); 
    await ƒS.Character.hide(characters.nat);
    await ƒS.update();

    await ƒS.Character.show(characters.nat, characters.nat.pose.angry, ƒS.positionPercent(30, 100));
    await ƒS.Speech.tell(characters.unknown, text.nat.scene3_2.T0001);
    await ƒS.update();

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0003);
    await ƒS.update();

    await ƒS.Character.hide(characters.nat);   
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.update(0.5);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.thinking, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0004);
    await ƒS.update();

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.irritated, ƒS.positionPercent(30, 100));
    await ƒS.Speech.tell(characters.unknown, text.nat.scene3_2.T0002);
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0005);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0006);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0007);

    await ƒS.Speech.tell(characters.unknown, text.nat.scene3_2.T0003);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0008);
    await ƒS.update();

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.flustered, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0009);
    await ƒS.update();

    await ƒS.Speech.tell(characters.nat, text.nat.scene3_2.T0004);
    await ƒS.Speech.tell(characters.nat, text.nat.scene3_2.T0005);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0010);
    await ƒS.update();

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0011);
    await ƒS.update();
    
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0012);
    dataForSave.class = await ƒS.Speech.getInput();
    await ƒS.update(); 
    
    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.neutral, ƒS.positionPercent(30, 100));
    await ƒS.Speech.tell(characters.nat, text.nat.scene3_2.T0006);
    await ƒS.Speech.tell(characters.nat, "Well, sorry… I don't remember you or a class called " + dataForSave.class + "." );
    await ƒS.Speech.tell(characters.nat, text.nat.scene3_2.T0008);
    await ƒS.Speech.tell(characters.narrator, "...");
   
    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.flustered, ƒS.positionPercent(30, 100));
    await ƒS.Speech.tell(characters.nat, text.nat.scene3_2.T0009);
    await ƒS.update(); 

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0013);
    await ƒS.Speech.tell(characters.narrator, "...");

    await ƒS.Character.hide(characters.nat);
    await ƒS.Character.show(characters.nat, characters.nat.pose.happy, ƒS.positionPercent(30, 100));
    await ƒS.update();
    
    await ƒS.Speech.tell(characters.nat, text.nat.scene3_2.T0010);  

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0014);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0015);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0016);
    await ƒS.update();

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0017);
    await ƒS.update();

    await ƒS.Speech.tell(characters.nat, text.nat.scene3_2.T0011);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0018);
    await ƒS.update();

    await ƒS.Speech.tell(characters.nat, text.nat.scene3_2.T0012);
    ƒS.Character.animate(characters.nat, characters.nat.pose.happy, outroLeftBorder());
    await ƒS.Character.hide(characters.nat);
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0019);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.frustrated, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0020);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0021);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0022);
    await ƒS.update();

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0023);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0024);
    await ƒS.update();

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene3_2.T0025);

    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.neutral, outroRightBorder());
    ƒS.Speech.hide(); 
    await ƒS.Character.hide(characters.bonny);
    await ƒS.update(1);

    await ƒS.Location.show(locations.busyStreet.rain);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    await ƒS.Progress.delay(3); //increase time
   
    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);
    await ƒS.Location.show(locations.bonnysRoom);
    await ƒS.update(transitions.noise.duration, transitions.noise.alpha, transitions.noise.edge);

    await ƒS.Progress.delay(2);
    await ƒS.Text.print(text.novelPage.scene3_2);

    //return Scene6();
    }
}