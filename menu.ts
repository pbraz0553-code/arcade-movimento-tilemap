namespace misticoMenu {

    /**
     * Menu inicial pronto (Play)
     */
    //% block="criar menu inicial | título %titulo | fundo %fundo | personagem %personagem"
    //% group="Menu"
    export function criarMenu(
        titulo: string,
        fundo: number,
        personagem: Sprite
    ) {

        // Cria uma cena separada
        game.pushScene()
        scene.setBackgroundColor(fundo)

        // Título do jogo
        let title = textsprite.create(titulo)
        title.setMaxFontHeight(16)
        title.setPosition(80, 20)

        // Personagem decorativo
        personagem.setPosition(80, 60)
        personagem.setFlag(SpriteFlag.Ghost, true)

        // Texto PLAY
        let play = textsprite.create("Play")
        play.setPosition(80, 100)

        // Cursor
        let cursor = textsprite.create("▶")
        cursor.setPosition(45, 100)

        // Pressionar A para começar
        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            cursor.startEffect(effects.confetti, 200)

            timer.after(150, function () {
                game.popScene() // sai do menu e inicia o jogo
            })
        })
    }
}
