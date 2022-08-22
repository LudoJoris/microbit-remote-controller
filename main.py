cmds: List[str] = []
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
radio.set_group(1)
radio.set_transmit_power(5)
basic.show_icon(IconNames.YES)
basic.clear_screen()

def on_forever():
    remote.key_pad()
basic.forever(on_forever)
