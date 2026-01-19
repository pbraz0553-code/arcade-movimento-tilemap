namespace movimentoTilemap {

    /**
     * Ativa movimento do personagem usando o controle
     * @param jogador sprite do jogador
     * @param velocidade velocidade do movimento
     */
    //% block="ativar movimento do jogador $jogador velocidade $velocidade"
    //% velocidade.defl=100
    export function ativarMovimento(jogador: Sprite, velocidade: number) {
        controller.moveSprite(jogador, velocidade, velocidade)
        jogador.setFlag(SpriteFlag.StayInScreen, true)
    }

    /**
     * Para o movimento do jogador
     * @param jogador sprite do jogador
     */
    //% block="parar movimento do jogador $jogador"
    export function pararMovimento(jogador: Sprite) {
        jogador.vx = 0
        jogador.vy = 0
    }

    /**
     * Define colisão do jogador com paredes do tilemap
     * @param jogador sprite do jogador
     */
    //% block="ativar colisão com tilemap para $jogador"
    export function colisaoTilemap(jogador: Sprite) {
        scene.onHitWall(SpriteKind.Player, function (sprite, location) {
            sprite.vx = 0
            sprite.vy = 0
        })
    }
}
