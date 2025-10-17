function isPhone() {
	const ua = navigator.userAgent;
	const mobileUA = /Mobi|Android|iPhone|iPod/i.test(ua);
	const smallScreen = window.matchMedia("(max-width: 768px)").matches;
	return mobileUA || smallScreen;
}
if (isPhone()) {
	document.querySelector(".downloadButton").onclick = () => {
		showModal(
			"hoursync.net/<br>download",
			"HourSync is not yet available for mobile. Open this link on your laptop to get HourSync for Windows!"
		);
	};
} else if (
	!("gpu" in navigator) &&
	navigator.userAgent.includes("Windows NT 6.3")
) {
	document.querySelector(".downloadButton").onclick = () => {
		showModal(
			"Update OS",
			"As much as I love Windows XP, 7, and even 8.1, it's time to update your operating system. HourSync only supports devices running Windows 10 or later."
		);
	};
}

function showModal(h1Content, pContent) {
	let div = create("div");
	let cont = create("div");
	let h1 = create("h1");
	let p = create("p");
	let button = create("button");

	div.classList.add("modal");
	cont.classList.add("container");
	h1.innerHTML = h1Content;
	p.innerHTML = pContent;

	button.addEventListener("click", closeModal);
	button.innerHTML = "Okay";

	h1.style.fontSize = "3rem";

	cont.append(h1);
	cont.append(p);
	cont.append(button);
	div.append(cont);

	document.body.append(div);
}

function closeModal() {
	let modal = document.querySelector(".modal");

	modal.classList.add("closing");
	modal.animate(
		{
			opacity: 0,
		},
		{
			duration: 250,
			easing: "ease",
			fill: "forwards",
		}
	);
	setTimeout(() => {
		modal.remove();
	}, 250);
}

function create(e) {
	return document.createElement(e);
}
