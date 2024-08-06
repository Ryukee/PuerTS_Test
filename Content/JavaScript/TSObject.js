"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UE = require("ue");
class TsObject extends UE.Object {
    static WorldContext = undefined;
    Init(worldContext) {
        UE.KismetSystemLibrary.PrintString(null, "TsObject Init", true, true, new UE.LinearColor(1.0, 0.0, 0.66, 1.0), 2.0);
    }
}
exports.default = TsObject;
//# sourceMappingURL=TsObject.js.map