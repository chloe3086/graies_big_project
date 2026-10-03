basic.forever(function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # . # . #
        # # # # #
        `)
    music.playMelody("E B C5 A B G A F ", 120)
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    5000,
    0,
    255,
    0,
    500,
    SoundExpressionEffect.Warble,
    InterpolationCurve.Linear
    ), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C D E C C D E - ", 80), music.PlaybackMode.UntilDone)
    basic.showString("chioe8866880")
})
