function runPreformance () {
    mbit_Robot.Music_Car(mbit_Robot.enMusic.prelude)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 150)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(2000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 150)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    basic.pause(2000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 150)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(2000)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.prelude)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 150)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(2000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 150)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Yellow)
    basic.pause(2000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 150)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
    basic.pause(2000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 150)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.prelude)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
}
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    # # # # #
    `)
for (let index = 0; index < 100; index++) {
    runPreformance()
}
