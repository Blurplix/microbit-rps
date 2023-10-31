input.onButtonPressed(Button.A, function () {
    if (running == 0) {
        if (mode == 0) {
            if (lastKey == "a") {
                if (select < 3) {
                    select += 1
                } else {
                    select = 1
                }
            } else {
                lastKey = "a"
                select = 1
            }
        }
        if (select == 0) {
            error()
        } else {
            seznam[2 + select].showImage(0)
        }
    }
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_EVT_ANY, function () {
    basic.pause(100)
    running = 0
})
function index (číslo: number) {
    if (číslo < 0) {
        return 3 + číslo
    }
    return číslo
}
input.onButtonPressed(Button.AB, function () {
    if (running == 0) {
        if (mode == 0) {
            pins.digitalWritePin(DigitalPin.P1, 1)
            mode = 1
            pins.digitalWritePin(DigitalPin.P0, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 1)
            mode = 0
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
    } else {
        error()
    }
})
input.onButtonPressed(Button.B, function () {
    if (running == 0) {
        if (select != 0) {
            if (mode == 0) {
                running = 1
                selected = select
                image.showImage(0)
                for (let index = 0; index < 4; index++) {
                    pozice += -1
                    image.showImage(pozice)
                    basic.pause(100)
                }
                bot = randint(1, 3)
                seznam[2 + bot].showImage(0)
                basic.pause(2000)
                seznam[index(bot - selected)].showImage(0)
                lastKey = "b"
                pozice = 0
                control.raiseEvent(
                EventBusSource.MICROBIT_ID_IO_P0,
                EventBusValue.MICROBIT_EVT_ANY
                )
            } else {
                if (bot == 0) {
                    error()
                } else {
                    seznam[2 + bot].showImage(0)
                }
            }
        } else {
            error()
        }
    }
})
function error () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(100)
    }
}
let bot = 0
let pozice = 0
let running = 0
let seznam: Image[] = []
let image: Image = null
let lastKey = ""
let mode = 0
let selected = 0
let select = 0
pins.digitalWritePin(DigitalPin.P0, 1)
select = 0
selected = 0
mode = 0
lastKey = "a"
image = images.createImage(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
seznam = []
seznam.push(images.createImage(`
    . . . . .
    # # # # #
    . . . . .
    # # # # #
    . . . . .
    `))
seznam.push(images.iconImage(IconNames.Yes))
seznam.push(images.iconImage(IconNames.No))
seznam.push(images.iconImage(IconNames.Diamond))
seznam.push(images.iconImage(IconNames.Scissors))
seznam.push(images.iconImage(IconNames.Chessboard))
