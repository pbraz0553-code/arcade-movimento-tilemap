//% color=#6A0DAD icon="\uf11b" block="Mistico Engine"
namespace misticoEngine {

    let podeMover = true
    let velocidadeNormal = 100
    let velocidadeDash = 180

    /**
     * Movimento livre com controle
     */
    //% block="ativar movimento livre do jogador $jogador"
    //% group="Movimento"
    export function movimentoLivre(jogador: Sprite) {
        controller.moveSprite(jogador, velocidadeNormal, velocidadeNormal)
        jogador.setFlag(SpriteFlag.StayInScreen, true)
    }

    /**
     * Movimento por GRID estilo Pokémon
     */
    //% block="ativar movimento por grid $jogador"
    //% group="Movimento"
    export function movimentoGrid(jogador: Sprite) {
        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            moverGrid(jogador, 0, -16)
        })
        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            moverGrid(jogador, 0, 16)
        })
        controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
            moverGrid(jogador, -16, 0)
        })
        controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
            moverGrid(jogador, 16, 0)
        })
    }

    function moverGrid(jogador: Sprite, dx: number, dy: number) {
        if (!podeMover) return
        podeMover = false
        jogador.x += dx
        jogador.y += dy
        timer.after(150, function () {
            podeMover = true
        })
    }

    /**
     * Animação automática andando
     */
    //% block="ativar animação andando $jogador imagens $frames intervalo $tempo"
    //% group="Animação"
    export function animacaoAndar(jogador: Sprite, frames: Image[], tempo: number) {
        animation.runImageAnimation(
            jogador,
            frames,
            tempo,
            true
        )
    }

    /**
     * Colisão com tile específico
     */
    //% block="quando $jogador tocar no tile $tile executar"
    //% group="Colisão"
    export function colisaoPorTile(jogador: Sprite, tile: Image, acao: () => void) {
        scene.onOverlapTile(SpriteKind.Player, tile, function () {
            acao()
        })
    }

    /**
     * Dash / correr
     */
    //% block="ativar dash para $jogador"
    //% group="Movimento"
    export function dash(jogador: Sprite) {
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            controller.moveSprite(jogador, velocidadeDash, velocidadeDash)
        })
        controller.A.onEvent(ControllerButtonEvent.Released, function () {
            controller.moveSprite(jogador, velocidadeNormal, velocidadeNormal)
        })
    }

    /**
     * Profundidade (fake 3D)
     */
    //% block="ativar profundidade 3D falsa para $jogador"
    //% group="Visual"
    export function profundidadeFake3D(jogador: Sprite) {
        game.onUpdate(function () {
            jogador.z = jogador.y
        })
    }

    /**
     * Criar menu inicial de jogo
     */
    //% block="criar menu inicial título $titulo"
    //% group="Menu"
    export function menuInicial(titulo: string) {
        scene.setBackgroundColor(9)
        game.splash(titulo, "Pressione A para começar")
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            game.reset()
        })
    }
}
