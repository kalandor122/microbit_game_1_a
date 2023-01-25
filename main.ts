radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        led.unplot(position_X, position_y)
        position_y += -1
    }
    if (receivedNumber == 1) {
        led.unplot(position_X, position_y)
        position_y += 1
    }
})
input.onButtonPressed(Button.A, function () {
    led.unplot(position_X, position_y)
    position_X += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(position_X, position_y)
    position_X += 1
})
let position_X = 0
let position_y = 0
let pos = false
let sdf = 0
radio.setGroup(90)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
for (let index = 0; index < 3; index++) {
    led.plot(randint(0, 4), 3)
}
position_y = 2
position_X = 2
led.plot(position_X, position_y)
basic.forever(function () {
    led.plot(position_X, position_y)
})
basic.forever(function () {
    while (true) {
        sdf = 0
        for (let index2 = 0; index2 <= 4; index2++) {
            for (let index3 = 0; index3 <= 4; index3++) {
                if (led.point(index2, index3) == true) {
                    sdf += 1
                    console.log(sdf)
                }
            }
        }
        if (sdf == 1) {
            console.log("win")
basic.clearScreen()
            basic.showString("win")
        }
    }
})
