#pragma once

#include "JsEnv.h"

#include "CoreMinimal.h"
#include "Engine/GameInstance.h"
#include "TsGameInstance.generated.h"

UCLASS()
class PUERTS_TEST_API UTsGameInstance : public UGameInstance
{
    GENERATED_BODY()

public:

    virtual void Init() override;

    virtual void OnStart() override;

    virtual void Shutdown() override;

private:
    TSharedPtr<puerts::FJsEnv> GameScript;
};
