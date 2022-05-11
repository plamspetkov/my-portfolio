nav = document.querySelectorAll('.main__nav ul li > a');
sections = document.querySelectorAll('.section');
email = document.querySelectorAll('.email');
href = document.querySelector('.email').getAttribute('href');

activeBtn = (e) => {
	if (!e.target) {
		e.target.closest.classList.remove('active');
	} else {
		e.target.classList.add('active');
	}
};

section = () => {};

window.addEventListener('scroll', () => {
	let current = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (scrollY >= sectionTop - sectionHeight / 3) {
			current = section.getAttribute('id');
		}
	});

	nav.forEach((a) => {
		a.addEventListener('click', activeBtn);
		if ('click' === true) {
			a.closest.classList.remove('active');
			a.target.classList.add('active');
		} else {
			a.classList.remove('active');
			if (a.classList.contains(current)) {
				a.classList.add('active');
			}
		}
	});
});

email.forEach((a) => {
	a.addEventListener('mouseenter', () => {
		a.text = 'Copy to Clipboard';
	});
});

email.forEach((a) => {
	a.addEventListener('click', () => {
		a.text = 'plams.petkov@gmail.com';
		a.classList.remove('copied');
	});
});

email.forEach((email) => {
	email.addEventListener('click', async (e) => {
		e.preventDefault();
		mail = href.replace('mailto:', '');
		await navigator.clipboard.writeText(mail);
		email.text = 'Copied!';
		email.classList.add('copied');
	});
});
