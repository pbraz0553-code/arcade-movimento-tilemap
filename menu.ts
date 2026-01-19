namespace misticoMenu {

    //% block="criar menu inicial | título %titulo | fundo %fundo | personagem %personagem"
    //% group="Menu"
    export function criarMenu(
        titulo: string,
        fundo: number,
        personagem: Sprite
    ) {

        game.pushScene()
        scene.setBackgroundColor(fundo)

        let title = textsprite.create(titulo)
        title.setPosition(80, 20)

        personagem.setPosition(80, 60)
        personagem.setFlag(SpriteFlag.Ghost, true)

        let play = textsprite.create("Play")
        play.setPosition(80, 100)

        let cursor = textsprite.create("▶")
        cursor.setPosition(45, 100)

        controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
            timer.after(150, function () {
                game.popScene()
            })
        })
    }
}
