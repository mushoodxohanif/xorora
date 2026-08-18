export type FieldErrors = Partial<Record<string, string>>;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Required field sets per form surface. */
export const FORM_FIELDS = {
  contact: ["name", "email"] as const,
  contactWithMessage: ["name", "email", "message"] as const,
  homeContact: ["firstName", "lastName", "email", "phone", "message"] as const,
  product: ["name", "email", "company", "using"] as const,
  newsletter: ["email"] as const,
  quote: ["name", "email", "requirement"] as const,
};

const DEFAULT_MESSAGES: Record<string, string> = {
  name: "Please enter your full name.",
  firstName: "Please enter your first name.",
  lastName: "Please enter your last name.",
  email: "Please enter your work email.",
  phone: "Please enter your phone number.",
  company: "Please enter your company name.",
  message: "Please enter a message.",
  using: "Let us know what you use today.",
  requirement: "Please describe your requirement.",
};

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}

export function getFormValues(form: HTMLFormElement): Record<string, string> {
  const data = new FormData(form);
  const values: Record<string, string> = {};

  for (const [key, value] of data.entries()) {
    if (typeof value === "string") {
      values[key] = value;
    }
  }

  return values;
}

export function validateRequired(
  values: object,
  required: readonly string[],
  messages: Partial<Record<string, string>> = {},
): FieldErrors {
  const record = values as Record<string, string | undefined>;
  const errors: FieldErrors = {};

  for (const field of required) {
    const value = (record[field] ?? "").trim();
    if (!value) {
      errors[field] =
        messages[field] ?? DEFAULT_MESSAGES[field] ?? "This field is required.";
    }
  }

  const email = (record.email ?? "").trim();
  if (email && !isValidEmail(email)) {
    errors.email = "Enter a valid email address.";
  }

  return errors;
}

export function validateForm(
  form: HTMLFormElement,
  required: readonly string[],
  messages?: Partial<Record<string, string>>,
): FieldErrors {
  return validateRequired(getFormValues(form), required, messages);
}
