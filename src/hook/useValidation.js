import { useState } from "react";

const useValidation = () => {
  const [validationResult, setValidationResult] = useState([]);
  // Define patterns for validation
  const patterns = {
    Fullname: /^[a-zA-Z]+(?: [a-zA-Z]+){1,2}$/,
    PhoneNumber: /^(81|76|71|03|79|70)\d{6}$/,
    Email: /^[a-zA-Z_]{3,}[0-9]@(?:gmail\.com|hotmail\.com)$/,
    Details: /^.{10,500}$/,
  };
  const checkValidation = (name, value) => {
    // Get the pattern for the given field name
    const pattern = patterns[name];
    if (!pattern) return;

    // Check if the value matches the pattern
    const isValid = pattern.test(value);

    // Update validation results based on validity
    setValidationResult((prev) => {
      // Create a new array to avoid mutating the previous state
      const updatedResults = new Set(prev);

      if (!isValid) {
        updatedResults.add(name);
      } else {
        updatedResults.delete(name);
      }

      // Convert Set back to Array
      return Array.from(updatedResults);
    });
  };
  return { validationResult, checkValidation };
};

export default useValidation;
