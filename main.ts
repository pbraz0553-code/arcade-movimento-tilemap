namespace movimentoTilemap {

    /**
     * Ativa movimento do jogador com controle
     * @param jogador sprite do jogador
     * @param velocidade velocidade do movimento
     */
    //% block="ativar movimento do jogador $jogador velocidade $velocidade"
    //% velocidade.defl=100
    //% group="Movimento"
    export function ativarMovimento(jogador: Sprite, velocidade: number) {
        controller.moveSprite(jogador, velocidade, velocidade)
        jogador.setFlag(SpriteFlag.StayInScreen, true)
    }

    /**
     * Para totalmente o jogador
     * @param jogador sprite do jogador
     */
    //% block="parar movimento do jogador $jogador"
    //% group="Movimento"
    export function pararMovimento(jogador: Sprite) {
        jogador.vx = 0
        jogador.vy = 0
    }

    /**
     * Ativa colisão do jogador com paredes do tilemap
     * @param jogador sprite do jogador
     */
    //% block="ativar colisão com tilemap para $jogador"
    //% group="Colisão"
    export function ativarColisao(jogador: Sprite) {
        scene.onHitWall(SpriteKind.Player, function (sprite, location) {
            sprite.vx = 0
            sprite.vy = 0
        })
    }

    /**
     * Centraliza o jogador em tiles (movimento mais preciso)
     * @param jogador sprite do jogador
     */
    //% block="centralizar jogador no tile $jogador"
    //% group="Tilemap"
    export function centralizarNoTile(jogador: Sprite) {
        jogador.x = Math.round(jogador.x / 16) * 16
        jogador.y = Math.round(jogador.y / 16) * 16
    }
}
