function autoFarm() {
	"use strict";
	const intervalId = setInterval(() => {
		try {
			const energyElem = document.querySelector("tw-expression[name=energy]");
			const maxEnergyElem = document.querySelector("tw-expression[name=maxEnergy]");
			if (energyElem.textContent !== maxEnergyElem.textContent) {
				document.getElementsByTagName("tw-enchantment")[0].click();
				console.log("clicked the 'fight' button");
			} else {
				console.log("energy thanks filled, we don't need to farm anymore!");
				clearInterval(intervalId );
			}
		}
		catch(e) {
			console.log("uh oh! we found an issue:");
			console.error(e);
			console.log("stopping the interval...");
			clearInterval(intervalId);
		}
	}, 400);
	console.log("starting to farm...")
}
