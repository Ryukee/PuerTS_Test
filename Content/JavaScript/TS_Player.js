"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
const ue_1 = require("ue");
class TS_Player extends UE.Character {
    FpsCamera;
    GunLocation;
    Constructor() {
    }
    // Shoot(event: UE.EInputEvent): void {
    //     // UE.KismetSystemLibrary.PrintString(this, "shoot");
    //     if(event = UE.EInputEvent.IE_Pressed) {
    //         UE.KismetSystemLibrary.PrintString(null, "shoot", true, true, new UE.LinearColor(0.0, 0.66, 1.0, 1.0), 2.0)
    //     }
    // }
    MoveForward(axisValue) {
        this.AddMovementInput(this.GetActorForwardVector(), axisValue, false);
        if (axisValue <= -0.1 || axisValue >= 0.1) {
            UE.KismetSystemLibrary.PrintString(null, "Move: " + axisValue, true, true, new UE.LinearColor(0.0, 0.66, 1.0, 1.0), 1.0);
        }
    }
}
__decorate([
    ue_1.uproperty.attach("FpsCamera")
], TS_Player.prototype, "GunLocation", void 0);
exports.default = TS_Player;
//# sourceMappingURL=TS_Player.js.map