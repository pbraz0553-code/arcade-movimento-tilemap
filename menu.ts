namespace misticoMenu {

    /**
     * Cria um menu inicial completo e funcional
     * @param titulo Nome do jogo
     * @param fundo Cor de fundo
     * @param personagem Sprite decorativo
     */
    //% block="criar menu inicial | título %titulo | fundo %fundo | personagem %personagem"
    //% group="Menu"
    export function criarMenu(
        titulo: string,
        fundo: number,
        personagem: Sprite
    ) {

        game.pushScene()

        scene.setBackgroundColor(fundo)

        // Título
        let titleSprite = textsprite.create(titulo)
        titleSprite.setMaxFontHeight(16)
        titleSprite.setPosition(80, 20)

        // Personagem decorativo
        personagem.setPosition(80, 70)
        personagem.setFlag(SpriteFlag.Ghost, true)

        // Cursor
        let cursor = textsprite.create("▶")
        cursor.setPosition(45, 100)

        // Opções
        let playText = textsprite.create("Play")
        playText.setPosition(80, 100)

        let opcao = 0

        controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
            opcao = 0
            cursor.setPosition(45, 100)
        })

        controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
            opcao = 0
            cursor.setPosition(45, 100)
        })

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            if (opcao == 0) {
                game.popScene()
            }
        })
    }
}
