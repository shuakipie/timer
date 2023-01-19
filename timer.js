class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.OnTick = callbacks.OnTick
            this.onComplete = callbacks.onComplete
        }
        this.startButton.addEventListener('click', this.start)
        // this.pausebutton.addEventListener('click', this.pause)
        this.pauseButton.addEventListener('click', this.pause)
    }
    // method
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining)

        }
        this.tick()
        this.interval = setInterval(this.tick, 50)
        // clearInterval(timer)
    }
    pause = () => {
        clearInterval(this.interval)
    }
    tick = () => {
        //  const timeRemaining  = parseFloat(this.durationInput.value)
        //  this.durationInput.value = timeRemaining -1  -- old approach
        // console.log('tick')
        if (this.timeRemaining <= 0) {
            this.pause()
            if (this.onComplete) {
                this.onComplete()
            }
        } else {
            this.timeRemaining = this.timeRemaining - .05
            if (this.OnTick) {
                this.OnTick(this.timeRemaining)
            }
        }

        //  const timeRemaining  = this.timeRemaining // get instance
        //  this.timeRemaining = timeRemaining -1  // old approach
        // // console.log('tick')
    }
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2) // 2 decimal for parseFloat
    }

}