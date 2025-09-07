export const formatCurrency = (value) =>
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );

export const sanitizeFileName = (fileName, unique = true) => {
  if (!fileName) return "";

  // Extract extension
  const parts = fileName.split(".");
  const ext = parts.length > 1 ? "." + parts.pop() : "";
  const baseName = parts.join(".");

  // Remove unsafe characters
  const safeBaseName = baseName.replace(/[^a-zA-Z0-9._-]/g, "_");

  // Add uniqueness
  const prefix = unique ? `${Date.now()}-` : "";

  return `${prefix}${safeBaseName}${ext}`;
};
