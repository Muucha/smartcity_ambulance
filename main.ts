radio.onReceivedValue(function (name, value) {
    if (name == "amb") {
        run = value
    }
})
let run = 0
radio.setGroup(1)
basic.forever(function () {
    if (run == 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    if (run == 1) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(500)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(500)
    } else {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
})
