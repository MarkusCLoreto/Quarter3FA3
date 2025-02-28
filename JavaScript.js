function generateStory() {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);

    let largest = Math.max(num1, num2, num3);
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nthLetter = alphabet[num1 - 1] || "Z";
    let totalMinutes = num2 * num3;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    let story = "In the kingdom of Pisay, three numbers were shown by the ancient scrolls: " + num1 + ", " + num2 + ", and " + num3 + ".<br><br>" +
                "The greatest among them is <b>" + largest + "</b>, marking the chosen warrior who will lead the quest.<br>" +
                "The hero must go and explore Dungeon " + num1 + " where the " + nthLetter + " scroll is hidden, a key to unlocking the sacred gates.<br>" +
                "To fulfill the prophecy, the hero must go on a journey lasting for <b>" + totalMinutes + "</b> minutes, which is <b>" + hours + " in hour(s) and " + minutes + " minute(s)</b>.<br><br>" +
                "Thus, the hero, guided by the dungeon's scroll '" + nthLetter + "', must travel for " + hours + " hour(s) and " + minutes + " minutes to uncover the lost relic of Pisay!";

    document.getElementById("story").innerHTML = story;
}

window.onload = generateStory;