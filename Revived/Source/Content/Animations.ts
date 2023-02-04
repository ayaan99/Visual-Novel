namespace Revived {
    export function bonnyIntro(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positions.bottomright,
            color: ƒS.Color.CSS("white", 0)
          },
          end: {
            translation: ƒS.positionPercent(30, 110),
            color: ƒS.Color.CSS("white", 1)
          },
          duration: 5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function boIntro(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positions.bottomright,
            color: ƒS.Color.CSS("white", 0)
          },
          end: {
            translation: ƒS.positionPercent(70, 100),
            color: ƒS.Color.CSS("white", 1)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function introLeftBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(-20, 100)
          },
          end: {
            translation: ƒS.positionPercent(30, 100)
          },
          duration: 3.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function outroLeftBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100)
          },
          end: {
            translation: ƒS.positionPercent(-30, 100)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function introRightBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(110, 100)
          },
          end: {
            translation: ƒS.positionPercent(70, 100)
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    export function outroRightBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(70, 100)
          },
          end: {
            translation: ƒS.positionPercent(115, 100)
          },
          duration: 2,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function leftToRightBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100)
          },
          end: {
            translation: ƒS.positionPercent(110, 100)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export function outroRightToLeftBorder(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(70, 100)
          },
          end: {
            translation: ƒS.positionPercent(-30, 100)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    
    export function bumpingAnimationBonny(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100)
          },
          end: {
            translation: ƒS.positionPercent(70, 100)
          },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
      
    export function bumpingAnimationNat(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(110, 100)
          },
          end: {
            translation: ƒS.positionPercent(30, 100)
          },
          duration: 1.5,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    
    export function fadeIn(): ƒS.AnimationDefinition {
        return {
          start: {
            translation: ƒS.positionPercent(30, 100),
            color: ƒS.Color.CSS("white", 0)
          },
          end: {
            translation: ƒS.positionPercent(30, 100),
            color: ƒS.Color.CSS("white", 1)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
    
    export function fadeOut(): ƒS.AnimationDefinition {
        return {
          start: {
            color: ƒS.Color.CSS("white", 1)
          },
          end: {
            color: ƒS.Color.CSS("white", 0)
          },
          duration: 3,
          playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }

    export async function horizontalShake(): Promise<void> {
        let scene: HTMLElement = <HTMLElement>document.getElementsByTagName("scene")[0];
    
        for (let i: number = 0; i < 15; i++) {
          if (i % 2 == 0) {
            scene.style.transform = `translateX(20px)`;
          }
          else {
            scene.style.transform = `translateX(-20px)`;
          }
          await new Promise(resolve => setTimeout(resolve, 60));
        }
        scene.style.transform = `translateX(0px)`;
      }
    
    export async function verticalShake(): Promise<void> {
        let scene: HTMLElement = <HTMLElement>document.getElementsByTagName("scene")[0];
    
        for (let i: number = 0; i < 15; i++) {
          if (i % 2 == 0) {
            scene.style.transform = `translateY(20px)`;
          }
          else {
            scene.style.transform = `translateY(-20px)`;
          }
          await new Promise(resolve => setTimeout(resolve, 40));
        }
        scene.style.transform = `translateY(0px)`;
      }
}