import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (
    !locale ||
    !routing.locales.includes(locale as "kontraktor" | "contractor")
  ) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    timeZone: "Asia/Jakarta",
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
