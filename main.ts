let A_SAYISI = 0
let B_SAYISI = 0
let _1_SONUÇ = 0
let SON_SONUÇ = 0
input.onButtonPressed(Button.A, function () {
    A_SAYISI += 1
    basic.clearScreen()
    basic.showNumber(A_SAYISI)
})
input.onButtonPressed(Button.AB, function () {
    B_SAYISI = A_SAYISI + 1
    _1_SONUÇ = B_SAYISI * A_SAYISI
    SON_SONUÇ = _1_SONUÇ / 2
    basic.clearScreen()
    basic.showNumber(SON_SONUÇ)
})
input.onButtonPressed(Button.B, function () {
    A_SAYISI = A_SAYISI - 1
    basic.clearScreen()
    basic.showNumber(A_SAYISI)
})
