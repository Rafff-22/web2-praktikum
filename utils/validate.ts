export interface ValidationResult<T> {
  valid: boolean;
  missing: (keyof T)[];
}

export function validateRequired<T extends object>(
  data: T,
  requiredFields: (keyof T)[]
): ValidationResult<T> {
  const missing = requiredFields.filter((field) => {
    const value = data[field];
    return (
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === "")
    );
  });

  return { valid: missing.length === 0, missing };
}