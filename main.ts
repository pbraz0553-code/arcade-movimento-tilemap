namespace misticoEngine {

    //% block="ativar movimento livre no sprite %player velocidade %speed"
    //% group="Movimento"
    export function movimentoLivre(player: Sprite, speed: number) {
        controller.moveSprite(player, speed, speed)
    }

    //% block="ativar dash no sprite %player velocidade %dashSpeed"
    //% group="Movimento"
    export function dash(player: Sprite, dashSpeed: number) {
        controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
            controller.moveSprite(player, dashSpeed, dashSpeed)
        })
    }

    //% block="ativar fake 3D no sprite %player"
    //% group="Visual"
    export function fake3D(player: Sprite) {
        game.onUpdate(function () {
            player.z = player.y
        })
    }
}
