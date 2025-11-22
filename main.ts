bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data == "f") {
        basic.showArrow(ArrowNames.North)
    } else if (data == "b") {
        basic.showArrow(ArrowNames.South)
    } else if (data == "l") {
        basic.showArrow(ArrowNames.West)
    } else if (data == "r") {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showString(data)
    }
})
let data = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Square)
