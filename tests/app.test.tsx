import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "../src/app";

describe("App", () => {
  it("persists locale and theme through the typed desktop bridge", async () => {
    render(<App />);
    await screen.findByText("darwin · v0.1.0");

    fireEvent.change(screen.getByLabelText("Language"), { target: { value: "zh" } });
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("原生外壳");
    expect(document.documentElement.lang).toBe("zh");
    expect(localStorage.getItem("locale")).toBe("zh");

    fireEvent.click(screen.getByRole("button", { name: "深色" }));
    await waitFor(() => expect(window.desktop.setThemeSource).toHaveBeenLastCalledWith("dark"));
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
