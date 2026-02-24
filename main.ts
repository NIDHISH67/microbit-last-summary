let TempC = 0
let TempF = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(TempC)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(TempF)
})
basic.forever(function () {
    TempC = input.temperature()
    TempF = TempC * 1.8
    TempF = TempF + 32
})
