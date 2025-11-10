function repeatMessage(message, times) {
    let count = 0;

    const intervalId = setInterval(() => {
        console.log(message);
        count++;

        if (count === times) {
            clearInterval(intervalId);
        }
    }, 1000);
}

repeatMessage("Practice makes perfect!", 3);
