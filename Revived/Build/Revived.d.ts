declare namespace Revived {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        pickedChoice: boolean;
        progressBar: number;
        class: string;
        accidentScene: number;
        ending: number;
    };
}
declare namespace Revived {
    function bonnyIntro(): ƒS.AnimationDefinition;
    function boIntro(): ƒS.AnimationDefinition;
    function introLeftBorder(): ƒS.AnimationDefinition;
    function outroLeftBorder(): ƒS.AnimationDefinition;
    function introRightBorder(): ƒS.AnimationDefinition;
    function outroRightBorder(): ƒS.AnimationDefinition;
    function leftToRightBorder(): ƒS.AnimationDefinition;
    function outroRightToLeftBorder(): ƒS.AnimationDefinition;
    function bumpingAnimationBonny(): ƒS.AnimationDefinition;
    function bumpingAnimationNat(): ƒS.AnimationDefinition;
    function fadeIn(): ƒS.AnimationDefinition;
    function fadeOut(): ƒS.AnimationDefinition;
    function horizontalShake(): Promise<void>;
    function verticalShake(): Promise<void>;
}
declare namespace Revived {
    let characters: {
        unknown: {
            name: string;
        };
        narrator: {
            name: string;
        };
        protagonist: {
            name: string;
        };
        bonny: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                happyAnimation: string;
                sleepy: string;
                irritated: string;
                irritated2: string;
                shocked: string;
                angry: string;
                upset: string;
                sad: string;
                crying: string;
                flustered: string;
                frustrated: string;
                thinking: string;
            };
        };
        bo: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                happyAnimation: string;
                irritated: string;
                upset: string;
                frustrated: string;
            };
        };
        drSherp: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        nat: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                angry: string;
                flustered: string;
                happy: string;
                irritated: string;
                laughing: string;
                smiling: string;
            };
        };
    };
}
declare namespace Revived {
    let text: {
        bonny: {
            scene1: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007_1: string;
                T0007_2: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011_1: string;
                T0011_2: string;
                T0012: string;
            };
            scene2: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
            };
            scene3_1: {
                T0001: string;
                T0002: string;
                T0003: string;
            };
            scene3_2: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
            };
            scene3_3: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
            };
            scene4_1: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
                T0027: string;
                T0028: string;
                T0029: string;
                T0030: string;
                T0031: string;
            };
            scene4_2: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
            };
            scene5: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
            };
            scene6: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
            };
            scene7: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
            };
            ending: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0015_2: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
                T0027: string;
                T0028: string;
                T0029: string;
                T0029_2: string;
                T0030: string;
                T0031: string;
                T0032: string;
                T0033: string;
                T0034: string;
                T0035: string;
                T0036: string;
                T0037: string;
                T0038: string;
                T0039: string;
                T0040: string;
                T0041: string;
                T0042: string;
                T0043: string;
            };
            ending2: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0012_2: string;
                T0013: string;
                T0013_2: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0022_2: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
                T0027: string;
                T0028: string;
                T0029: string;
            };
        };
        bo: {
            scene1: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
                T0026: string;
                T0027: string;
            };
            ending: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0008_2: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
                T0016: string;
                T0017: string;
                T0018: string;
                T0019: string;
                T0020: string;
                T0021: string;
                T0022: string;
                T0023: string;
                T0024: string;
                T0025: string;
            };
            ending2: {
                T0001: string;
                T0002: string;
                T0002_2: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
            };
        };
        nat: {
            scene3_2: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
            };
            scene4_1: {
                T0000: string;
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
            };
            scene4_2: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
            };
            scene5: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
            };
            scene6: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
            };
        };
        drSherp: {
            scene5: {
                T0001: string;
                T0002: string;
                T0003: string;
                T0004: string;
                T0005: string;
                T0006: string;
                T0007: string;
                T0008: string;
                T0009: string;
                T0010: string;
                T0011: string;
                T0012: string;
                T0013: string;
                T0014: string;
                T0015: string;
            };
        };
        novelPage: {
            scene3_1: string;
            scene3_2: string;
            scene4_1: string;
        };
    };
}
declare namespace Revived {
}
declare namespace Revived {
    let items: {
        bar: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        barOutside: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        classroom: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        cooking: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        hospital: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        library: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        park: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        shopping: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        street: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        busyStreetRain: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        busyStreet: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        study: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        bo: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
    };
}
declare namespace Revived {
    let locations: {
        blackScreen: {
            name: string;
            background: string;
        };
        afterlife: {
            name: string;
            background: string;
        };
        bonnysRoom: {
            name: string;
            background: string;
        };
        toDoList: {
            empty: {
                name: string;
                background: string;
            };
            projectCheck: {
                name: string;
                background: string;
            };
            cookingCheck: {
                name: string;
                background: string;
            };
            projectAndCookingCheck: {
                name: string;
                background: string;
            };
        };
        supermarket: {
            name: string;
            background: string;
        };
        emptyStreet: {
            normal: {
                name: string;
                background: string;
            };
            rain: {
                name: string;
                background: string;
            };
        };
        busyStreet: {
            normal: {
                name: string;
                background: string;
            };
            rain: {
                name: string;
                background: string;
            };
        };
        sidewalk: {
            name: string;
            background: string;
        };
        school: {
            name: string;
            background: string;
        };
        park: {
            name: string;
            background: string;
        };
        library: {
            name: string;
            background: string;
        };
        hospital: {
            name: string;
            background: string;
        };
        bar: {
            name: string;
            background: string;
        };
        barInside: {
            name: string;
            background: string;
        };
        cutScenes: {
            study: {
                name: string;
                background: string;
            };
            cooking: {
                name: string;
                background: string;
            };
            shopping: {
                name: string;
                background: string;
            };
            class: {
                name: string;
                background: string;
            };
            library: {
                name: string;
                background: string;
            };
        };
    };
}
declare namespace Revived {
    let sounds: {
        themes: {
            afterlifeIntro: string;
            afterlifeOutro: string;
            supermarket: string;
            meetingNat: string;
            wakeUpEnding: string;
            library: string;
            carCrash: string;
            park: string;
            bonnysRoom: string;
            hospital: string;
            bar: string;
        };
        sfx: {
            bar: string;
            carCrash: string;
            classroom: string;
            classroomPeople: string;
            cooking: string;
            footsteps: string;
            library: string;
            pageTurn: string;
            pen: string;
            supermarket: string;
            traffic: string;
            door: string;
            schoolBell: string;
            footstepsConcrete: string;
        };
    };
}
declare namespace Revived {
    let transitions: {
        lightbeam: {
            duration: number;
            alpha: string;
            edge: number;
        };
        bigWipe: {
            duration: number;
            alpha: string;
            edge: number;
        };
        bigWipe2: {
            duration: number;
            alpha: string;
            edge: number;
        };
        noise: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wipes: {
            duration: number;
            alpha: string;
            edge: number;
        };
        wet: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Revived {
    function Credits(): ƒS.SceneReturn;
}
declare namespace Revived {
    function EndingAcceptance(): ƒS.SceneReturn;
}
declare namespace Revived {
    function EndingDenial(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene1(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene2(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene3_1(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene3_2(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene3_3(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene4_1(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene4_2(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene5_1(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene5_2(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene6(): ƒS.SceneReturn;
}
declare namespace Revived {
    function Scene7(): ƒS.SceneReturn;
}
declare namespace Revived {
    function stop(): ƒS.SceneReturn;
}
