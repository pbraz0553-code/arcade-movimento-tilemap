namespace misticoEngine {

    // ==============================
    // MOVIMENTO LIVRE
    // ==============================
    //% block="ativar movimento livre no sprite %player velocidade %speed"
    //% group="Movimento"
    export function movimentoLivre(player: Sprite, speed: number) {
        controller.moveSprite(player, speed, speed)
    }

    // ==============================
    // DASH / CORRER
    // ==============================
    //% block="ativar dash no sprite %player velocidade %dashSpeed"
    //% group="Movimento"
    export function dash(player: Sprite, dashSpeed: number) {
        let normalSpeed = 50

        controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
            controller.moveSprite(player, dashSpeed, dashSpeed)
        })

        controller.B.onEvent(ControllerButtonEvent.Released, function () {
            controller.moveSprite(player, normalSpeed, normalSpeed)
        })
    }

    // ==============================
    // MOVIMENTO POR GRID (POKÉMON)
    // ==============================
    //% block="ativar movimento por grid no sprite %player tamanho do tile %tile"
    //% group="Grid"
    export function movimentoGrid(player: Sprite, tile: number) {

        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            player.y -= tile
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            player.y += tile
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            player.x -= tile
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            player.x += tile
        })
    }

    // ==============================
    // ANIMAÇÃO AUTOMÁTICA ANDANDO
    // ==============================
    //% block="ativar animação andando no sprite %player"
    //% group="Animação"
    export function animacaoAndar(player: Sprite) {
        game.onUpdate(function () {
            if (player.vx != 0 || player.vy != 0) {
                player.startEffect(effects.trail, 100)
            }
        })
    }

    // ==============================
    // COLISÃO POR TILE ESPECÍFICO
    // ==============================
    //% block="quando sprite %player tocar no tile %tile executar"
    //% group="Colisão"
    export function colisaoTile(
        player: Sprite,
        tile: Image,
        acao: () => void
    ) {
        scene.onOverlapTile(SpriteKind.Player, tile, function () {
            acao()
        })
    }

    // ==============================
    // FAKE 3D (PROFUNDIDADE POR Y)
    // ==============================
    //% block="ativar fake 3D no sprite %player"
    //% group="Visual"
    export function fake3D(player: Sprite) {
        game.onUpdate(function () {
            player.z = player.y
        })
    }
}
