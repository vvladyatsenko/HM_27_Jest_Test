const ageClassification = require('./ageClassification');

// ТЕСТ 1

describe('ageClassification function', () => {
  test('should return null for negative ages', () => {
    expect(ageClassification(-1)).toBeNull();
  });

  test('should return "дитячий вік" for ages 0 to 14', () => {
    for (let age = 0; age <= 14; age++) {
      expect(ageClassification(age)).toBe('дитячий вік');
    }
  });

  test('should return "молодий вік" for ages 15 to 44', () => {
    for (let age = 15; age <= 44; age++) {
      expect(ageClassification(age)).toBe('молодий вік');
    }
  });

  test('should return "середній вік" for ages 45 to 65', () => {
    for (let age = 45; age <= 65; age++) {
      expect(ageClassification(age)).toBe('середній вік');
    }
  });

  test('should return "пожилий вік" for ages 66 to 75', () => {
    for (let age = 66; age <= 75; age++) {
      expect(ageClassification(age)).toBe('пожилий вік');
    }
  });

  test('should return "старий вік" for ages 76 to 90', () => {
    for (let age = 76; age <= 90; age++) {
      expect(ageClassification(age)).toBe('старий вік');
    }
  });

  test('should return "довгожитель" for ages 91 to 122', () => {
    for (let age = 91; age <= 122; age++) {
      expect(ageClassification(age)).toBe('довгожитель');
    }
  });

  test('should return null for ages over 122', () => {
    expect(ageClassification(123)).toBeNull();
  });
});

// ТЕСТ 2

describe('ageClassification function additional tests', () => {
  // Коректність значення, що повертається, для граничних значень віку.
  test('should return the correct age category for border age values', () => {
    expect(ageClassification(14)).toBe('дитячий вік');
    expect(ageClassification(44)).toBe('молодий вік');
    expect(ageClassification(65)).toBe('середній вік');
    expect(ageClassification(75)).toBe('пожилий вік');
    expect(ageClassification(90)).toBe('старий вік');
  });
  // Правильність опрацювання крайніх випадків, таких як максимально допустимий вік (122 роки) і неприпустимі значення (менше 0 і більше 122).
  test('should handle edge cases properly', () => {
    expect(ageClassification(0)).toBe('дитячий вік');
    expect(ageClassification(122)).toBe('довгожитель');
    expect(ageClassification(123)).toBeNull();
    expect(ageClassification(-1)).toBeNull();
  });
});
