const rollDice = () => {
	const numDice = document.getElementById("num-dice").value;
	const armClass = document.getElementById("armor-class").value;
	const dx = document.getElementById("dice").value;
	const advantage = document.getElementById("advantage").checked;
	const disadvantage = document.getElementById("disadvantage").checked;
	let total = 0;
	let passes = 0;
	let result = "";
	let success = "";
	let failed = "";

	for (let i = 0; i < numDice; i++) {
		let roll1 = Math.floor(Math.random() * dx) + 1;
		let roll2 = Math.floor(Math.random() * dx) + 1;

		if (advantage) {
			const highestRoll = Math.max(roll1, roll2);
			total += highestRoll;
			if(highestRoll >= armClass){
				passes += 1;
				success += `<img src="images/d${dx}/dice${highestRoll}.png" alt="Dice ${highestRoll}">`;
			}else{
				failed += `<img src="images/d${dx}/dice${highestRoll}.png" alt="Dice ${highestRoll}">`;
			}
		} else if (disadvantage) {
			const lowestRoll = Math.min(roll1, roll2);
			total += lowestRoll;
			if(lowestRoll >= armClass){
				passes += 1;
				success += `<img src="images/d${dx}/dice${lowestRoll}.png" alt="Dice ${lowestRoll}">`;
			}else{
				failed += `<img src="images/d${dx}/dice${lowestRoll}.png" alt="Dice ${lowestRoll}">`;
			}
		} else {
			total += roll1;
			if(roll1 >= armClass){
				passes += 1;
				success += `<img src="images/d${dx}/dice${roll1}.png" alt="Dice ${roll1}">`;
			}else{
				failed += `<img src="images/d${dx}/dice${roll1}.png" alt="Dice ${roll1}">`;
			}
		}
	}

	result += `<p>Total: ${total}</p>`;
	document.getElementById("passes").innerHTML = `${passes}`;
	document.getElementById("success").innerHTML = success;
	document.getElementById("failed").innerHTML = failed;
	document.getElementById("result").innerHTML = result;
}