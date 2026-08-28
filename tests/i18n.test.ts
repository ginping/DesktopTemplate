import { describe, expect, it } from "vitest";
import { dictionaries, publicLocales } from "../src/lib/i18n";

describe("desktop locale contract", () => {
  it("keeps all public dictionaries structurally complete", () => {
    const keys = Object.keys(dictionaries.en).sort();
    for (const locale of publicLocales) {
      expect(Object.keys(dictionaries[locale]).sort()).toEqual(keys);
    }
  });
});
