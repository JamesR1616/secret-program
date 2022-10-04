input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    if (num > number) {
        // L = lower
        // 
        basic.showString("L")
    } else if (num < number) {
        // H = Higher
        // 
        basic.showString("H")
    } else if (num == number) {
        // W= Winner
        // 
        // 
        basic.showString("W")
        basic.showIcon(IconNames.Happy)
        control.reset()
    }
})
input.onButtonPressed(Button.B, function () {
    num += -1
    basic.showNumber(num)
})
let num = 0
let number = 0
number = randint(0, 20)
num = 0
basic.forever(function () {
    if (num > number) {
        // L = lower
        // 
        basic.showString("L")
    } else if (num < number) {
        // H = Higher
        // 
        basic.showString("H")
    } else if (num == number) {
        // W= Winner
        // 
        // 
        basic.showString("W")
        basic.showIcon(IconNames.Happy)
        control.reset()
    }
})
