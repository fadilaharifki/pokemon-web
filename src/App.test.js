import Footer from "./components/footer";
import { testRendererWithRoute } from "./utils/test-utils";

describe("Footer menu", () => {
  it("render all component", async () => {
    testRendererWithRoute(<Footer />, {
      route: "/",
      path: "/",
    });
  });
});
