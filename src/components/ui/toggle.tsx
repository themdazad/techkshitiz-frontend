import React, { useEffect, useState } from "react";

// Simple sun/moon SVG icons
const Sun = () => (
	<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
);
const Moon = () => (
	<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>
);

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	// On mount, set initial theme from localStorage or system
	useEffect(() => {
		const html = document.documentElement;
		const stored = localStorage.getItem("theme");
		const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (stored === "dark" || (!stored && prefersDark)) {
			html.classList.add("dark");
			setIsDark(true);
		} else {
			html.classList.remove("dark");
			setIsDark(false);
		}
	}, []);

	// Toggle theme handler
	const toggleTheme = () => {
		const html = document.documentElement;
		if (isDark) {
			html.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setIsDark(false);
		} else {
			html.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setIsDark(true);
		}
	};

	return (
		<button
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			title={isDark ? "Light mode" : "Dark mode"}
			onClick={toggleTheme}
			className="inline-flex items-center justify-center rounded-full p-2 border border-border bg-card hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
			type="button"
		>
			{isDark ? <Sun /> : <Moon />}
			<span className="sr-only">Toggle theme</span>
		</button>
	);
}
