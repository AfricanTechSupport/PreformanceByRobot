basic.showString("Hello! My name is CPU!")
basic.showIcon(IconNames.Happy)
for (let index = 0; index < 100; index++) {
    mbit_Robot.Music_Car(mbit_Robot.enMusic.entertainer)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 80)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
    basic.pause(2000)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.entertainer)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 80)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
    basic.pause(2000)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.entertainer)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 80)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Blue)
    basic.pause(2000)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.entertainer)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 80)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    basic.pause(2000)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.entertainer)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 80)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    basic.pause(2000)
    mbit_Robot.Music_Car(mbit_Robot.enMusic.entertainer)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 80)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Cyan)
    basic.pause(2000)
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Stop, 80)
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
}
