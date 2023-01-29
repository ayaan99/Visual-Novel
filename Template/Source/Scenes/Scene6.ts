namespace Template {
    export async function Scene6(): ƒS.SceneReturn {
    console.log("Scene6 starting");
    
    dataForSave.progressBar += 11.111;

    ƒS.Speech.hide();
    ƒS.Character.hideAll();

    await ƒS.Location.show(locations.emptyStreet.normal);
    await ƒS.update(transitions.bigWipe2.duration, transitions.bigWipe2.alpha, transitions.bigWipe2.edge);
    
 
    }
}