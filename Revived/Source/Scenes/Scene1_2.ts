namespace Revived {
    export async function Scene1_2(): ƒS.SceneReturn {
    console.log("Scene1_2 starting");

    await ƒS.Location.show(locations.afterlife);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 110));
    
    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0006);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0007);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0008);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0009);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0010);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0011);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.angry, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0007_1);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0007_2);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.upset, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0012);
    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.sad, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0008);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0009);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0013);
    ƒS.Speech.hide();
    await ƒS.Progress.delay(1.5);

    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0014);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0015);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0016);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0017);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0018);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.neutral, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0010);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0019);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0020);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.irritated2, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0011_1);
    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0011_2);
    
    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.frustrated, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);
   
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0021);
    
    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.neutral, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);
 
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0022);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0023);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0024);

    await ƒS.Character.hide(characters.bonny);
    await ƒS.Character.show(characters.bonny, characters.bonny.pose.happy, ƒS.positionPercent(30, 110));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bonny, text.bonny.scene1.T0012);
    await ƒS.Character.hide(characters.bo);
    await ƒS.Character.show(characters.bo, characters.bo.pose.happy, ƒS.positionPercent(70, 100));
    await ƒS.update(0.25);

    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0025);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0026);
    await ƒS.Speech.tell(characters.bo, text.bo.scene1.T0027);
    
    ƒS.Speech.hide();
    await ƒS.Character.animate(characters.bonny, characters.bonny.pose.happy, fadeOut()); 
    await ƒS.update(0.5);

    await ƒS.Character.animate(characters.bo, characters.bo.pose.happy, fadeOut()); 
    
    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.blackScreen);
    await ƒS.update(3);

    await ƒS.Progress.delay(1.5);

    return Scene2();
    }
}