import * as UE from 'ue'
import {$ref, $unref} from 'puerts'
import { uproperty } from 'ue'

class TS_Player extends UE.Character {
    FpsCamera: UE.CameraComponent;

    @uproperty.attach("FpsCamera")
    GunLocation: UE.SceneComponent;

    Constructor() {
        
    }

    
    // Shoot(event: UE.EInputEvent): void {
    //     // UE.KismetSystemLibrary.PrintString(this, "shoot");
    //     if(event = UE.EInputEvent.IE_Pressed) {
    //         UE.KismetSystemLibrary.PrintString(null, "shoot", true, true, new UE.LinearColor(0.0, 0.66, 1.0, 1.0), 2.0)
    //     }
    // }

    MoveForward(axisValue: number): void {
        this.AddMovementInput(this.GetActorForwardVector(), axisValue, false)
        UE.KismetSystemLibrary.PrintString(null, "Move: " + axisValue, true, true, new UE.LinearColor(0.0, 0.66, 1.0, 1.0), 2.0)
    }
}


export default TS_Player;