export default function logout(): void {
	localStorage.removeItem('loggedUserId');
	localStorage.removeItem('loggedUsername');
}
