### Demo编译运行

github单个文件不能超过100M，所以在这里上传了鸿蒙版本的V8库文件：

![image](https://github.com/user-attachments/assets/72116636-277c-4f6a-90d8-a96107e24742)

编译鸿蒙平台时需要将上面的`libwee8.a`放置在 `Plugins\Puerts\ThirdParty\v8_11.8.172\Lib\OHOS` 目录下。


### Demo说明

此Demo参考了文档 [脚本调用引擎API](https://puerts.github.io/docs/puerts/unreal/uclass_extends) 和 [继承引擎类](https://puerts.github.io/docs/puerts/unreal/script_call_uclass)，测试了以上两种调用方式。

继承引擎类的测试在 `TS_Player.ts` 中，在该脚本文件中继承了Character类，重写了MoveForward方法用于控制角色前后移动，并设置为了默认的操控角色。

![image](https://github.com/user-attachments/assets/05206b8e-936e-44d1-b097-b2e09e00851c)

鸿蒙平台在运行该脚本后，会在进入场景后3-10秒后出现闪退。 角色可正常操控，且ts中的日志正常输出，说明ts和引擎的相互调用是ok的，怀疑是gc导致的。在deveco中调试，看到崩溃点的堆栈如下：

![image](https://github.com/user-attachments/assets/1223f846-df3d-4662-b893-75d1e2373c02)

在 `GcSafeFindCodeForInnerPointer` 这个函数中，确实和gc相关。


### V8 编译说明

puerts作者在这个仓库中维护了V8的编译流水线，包括鸿蒙平台的支持，可供参考: https://github.com/puerts/backend-v8

遗憾的是目前只支持 9.x 和 10.x 版本出包，我提供的11.x版本的鸿蒙包是仿照10.x的出包流程进行编译的，可能由于版本的差异产生了问题。
