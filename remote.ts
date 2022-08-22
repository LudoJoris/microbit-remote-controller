//% weight=100 color=#E3008C icon="\u25A4"
namespace remote {
    let PIN_INIT = 0;

    let colPins = [DigitalPin.P0, DigitalPin.P1, DigitalPin.P2];
    let rowPins = [DigitalPin.P8, DigitalPin.P12, DigitalPin.P14, DigitalPin.P16];

    function pinInit(): void {
//        pins.digitalWritePin(DigitalPin.P0, 0);
//        pins.digitalWritePin(DigitalPin.P1, 0);
//        pins.digitalWritePin(DigitalPin.P2, 0);
//        pins.digitalWritePin(DigitalPin.P8, 0);
//        pins.digitalWritePin(DigitalPin.P12, 0);
//        pins.digitalWritePin(DigitalPin.P14, 0);
//        pins.digitalWritePin(DigitalPin.P16, 0);
        for (let rowPin of rowPins) {pins.digitalWritePin(rowPin, 0);}
        for (let colPin of colPins) {pins.digitalWritePin(colPin, 0);}
        PIN_INIT = 1;
        return;
    }

    function sendCmd(n: number): void {
        const cmd: string = cmds[n];
        radio.sendString(cmd);
        basic.showString(cmd, 40);
        basic.clearScreen();
        basic.pause(50);
    }

    //% block="radio send cmd"
    export function keyPad(): void {
        if (!PIN_INIT) {
            pinInit();
        }
        let n = 0;
        for (let rowPin of rowPins) {
            pins.digitalWritePin(rowPin, 1);
            for (let colPin of colPins) {
                if (pins.digitalReadPin(colPin)) {
                    pins.digitalWritePin(rowPin, 0);
                    sendCmd(n);
                }
                n++;
            }
            pins.digitalWritePin(rowPin, 0);
        }
        if (input.buttonIsPressed(Button.A)) {
            sendCmd(n);
        }
        n++;
        if (input.buttonIsPressed(Button.B)) {
            sendCmd(n);
        }
        n++;
        if (input.isGesture(Gesture.TiltLeft)) {
            sendCmd(n);
        }
        n++;
        if (input.isGesture(Gesture.TiltRight)) {
            sendCmd(n);
        }
        n++;
    }
}
