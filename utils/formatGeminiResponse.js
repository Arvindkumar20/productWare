export const formatGeminiResponse = (rawText) => {
  const lines = rawText.split("\n");
  let formatted = "";
  let inList = false;

  lines.forEach((line) => {
    const trimmed = line.trim();

    // If it's a bold heading like **1. Cleansing:**
    if (/^\*\*.*\*\*:?$/.test(trimmed)) {
      // Close list if open
      if (inList) {
        formatted += "</ul>";
        inList = false;
      }

      // Convert to heading
      const heading = trimmed.replace(/\*\*/g, "").replace(/:$/, "");
      formatted += `<h2 class="text-lg font-bold mt-4 mb-2">${heading}</h2>`;
    }

    // If it's a bullet point like * text
    else if (/^\* /.test(trimmed)) {
      if (!inList) {
        formatted += "<ul class='list-disc ml-6'>";
        inList = true;
      }
      formatted += `<li>${trimmed.replace(/^\* /, "")}</li>`;
    }

    // Normal paragraph
    else if (trimmed !== "") {
      if (inList) {
        formatted += "</ul>";
        inList = false;
      }
      formatted += `<p class="mb-2">${trimmed}</p>`;
    }
  });

  if (inList) formatted += "</ul>";

  return formatted;
};
