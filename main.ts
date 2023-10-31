input.onButtonPressed(Button.A, function () {
    if (select < 3) {
        select += 1
    } else {
        select += -2
    }
    if (select == 1) {
        basic.showIcon(IconNames.Diamond)
    }
    if (select == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (select == 3) {
        basic.showIcon(IconNames.Chessboard)
    }
})
input.onButtonPressed(Button.B, function () {
    selected = select
    můjObrázek.showImage(0)
    for (let index = 0; index < 4; index++) {
        pozice += -1
        můjObrázek.showImage(pozice)
        basic.pause(200)
    }
    bot = randint(1, 3)
    if (bot == 1) {
        basic.showIcon(IconNames.Diamond)
    }
    if (bot == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    if (bot == 3) {
        basic.showIcon(IconNames.Chessboard)
    }
    basic.pause(2000)
    if (selected == bot) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (selected == 1 && bot == 2 || (selected == 2 && bot == 3 || selected == 3 && bot == 1)) {
        basic.showIcon(IconNames.Yes)
    }
    if (selected == 2 && bot == 1 || (selected == 3 && bot == 2 || selected == 1 && bot == 3)) {
        basic.showIcon(IconNames.No)
    }
})
let bot = 0
let pozice = 0
let můjObrázek: Image = null
let selected = 0
let select = 0
select = 0
selected = 0
můjObrázek = images.createImage(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
pozice = 0
