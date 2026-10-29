let jogo = 0
input.onGesture(Gesture.Shake, function () {
    jogo = randint(1, 3)
    if (jogo == 1) {
        basic.showLeds(`
            . . . # #
            # . # # #
            . # # # .
            . # # . .
            # . . # .
            `)
    } else if (jogo == 2) {
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            # # # . #
            # # # # .
            # . # # #
            . # . # #
            # . # # #
            `)
    }
})
basic.forever(function () {
	
})
