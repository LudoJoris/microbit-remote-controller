let cmds: string[] = []
cmds[0] = "+"
cmds[1] = "0"
cmds[2] = "="
cmds[3] = "1"
cmds[4] = "2"
cmds[5] = "3"
cmds[6] = "4"
cmds[7] = "5"
cmds[8] = "6"
cmds[9] = "7"
cmds[10] = "8"
cmds[11] = "9"
cmds[12] = "A"
cmds[13] = "B"
cmds[14] = "L"
cmds[15] = "R"
radio.setGroup(1)
radio.setTransmitPower(5)
basic.showIcon(IconNames.Yes)
basic.clearScreen()
basic.forever(function () {
    remote.keyPad()
})
