function ageClassification(age) {
  if (age < 0 || age > 122) return null;
  if (age <= 14) return 'дитячий вік';
  if (age <= 44) return 'молодий вік';
  if (age <= 65) return 'середній вік';
  if (age <= 75) return 'пожилий вік';
  if (age <= 90) return 'старий вік';
  if (age <= 122) return 'довгожитель';
}

module.exports = ageClassification;
