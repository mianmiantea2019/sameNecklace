export default function sameNecklace(a: string, b: string): boolean {
	// if (a.length < 2 || b.length < 2) {
	// 	return a === b;
	// }
	let isSameNecklace: boolean = false;
	let aPushed: string = a;
	for (let index: number = 0; index < a.length; index++) {
		aPushed = slideOneLetter(aPushed);
		if (aPushed === b) {
			isSameNecklace = true;
		}
	}
	return a === b || isSameNecklace;
}

function slideOneLetter(a: string): string {
	return a.slice(-1) + a.substring(0,a.length - 1);
}

// export default function sameNecklace (a, b) {
// 	let necklaceA = a; 
// 	for (let i = 0; i < a.length; i ++) {
// 		necklaceA = sliceAstring(necklaceA)
// 	}
// }

// function sliceAstring (a) {
// 	return a.slice(-1) + a.substring(0, a.length - 1)
// }