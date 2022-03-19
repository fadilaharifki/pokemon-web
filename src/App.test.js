import Footer from "./components/footer";
import Home from './page/home'
import About from './page/about'
import MyPokemon from './page/myPokemont'
import { testRendererWithRoute } from "./utils/test-utils";
import { screen, render, queryByAttribute } from '@testing-library/react'

describe("Footer menu", () => {
  it("render all component", async () => {
    testRendererWithRoute(<Footer />, {
      route: "/",
      path: "/",
    });
  });
});

describe("Find Pokemon", () => {
  it("render page find pokemon", async () => {
    testRendererWithRoute(<Home />, {
      route: "/",
      path: "/",
    });
  });
});

describe("About", () => {
  it("render page about", async () => {
    testRendererWithRoute(<About />, {
      route: "/about",
      path: "/about",
    });
  });

});

describe("Testing tag page about", () => {
  it("render page about", async () => {
    render(<About />);

    const title = screen.getByRole('title');
    const desc = screen.getByRole('desc');
    expect(title).toMatchSnapshot();
    expect(desc).toMatchSnapshot();
  });
})

describe("My Pokemon", () => {
  it("render page My Pokemon", async () => {
    testRendererWithRoute(<MyPokemon />, {
      route: "/mypokemon",
      path: "/mypokemon",
    });
  });
});