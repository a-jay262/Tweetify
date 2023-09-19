export default function isAuthenticated(): boolean {
	const token = localStorage.getItem('loggedUserId');
	return token !== null;
}

export function logout(): void {
	localStorage.removeItem('loggedUserId');
	localStorage.removeItem('loggedUsername');
}

export function login(userId: string, username: string): void {
	localStorage.setItem('loggedUserId', userId);
	localStorage.setItem('loggedUsername', username);
}

export function getLoggedUserId(): string | null {
	return localStorage.getItem('loggedUserId');
}

export function getLoggedUsername(): string | null {
	return localStorage.getItem('loggedUsername');
}
