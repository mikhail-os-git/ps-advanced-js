function isOlderThan14(date) {
	const now = new Date();
	const birthDate = new Date(date);
	const age = now.getFullYear() - birthDate.getFullYear();
	if(
			(age > 14) ||
			(age === 14 && (birthDate.getMonth() > now.getMonth() ||  birthDate.getMonth() === now.getMonth() && birthDate.getDate() >= now.getDate()))
		){
		return true;
	}
	return false;
}

console.log('Должно быть false', isOlderThan14('2011-12-7'));
console.log('Должно быть true', isOlderThan14('2010-12-3'));
