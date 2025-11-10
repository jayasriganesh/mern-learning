function startCountdown() {
    let count = 5;

    const intervalId = setInterval(() => {
        console.log(count);
        count--;

        if (count === 0) {
            console.log("Time's up!");
            clearInterval(intervalId);
        }
    }, 1000);
}

startCountdown();
