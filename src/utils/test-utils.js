import { ApolloProvider } from "@apollo/client";
import { render } from "@testing-library/react";
import { client } from '../graphql/config'
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const testRendererWithRoute = (ui, { route, path }) => {
  console.log(path);
  render(
    <ApolloProvider client={client}>
      <ReactRoutes>
        <Route path={path} element={ui} />
      </ReactRoutes>
    </ApolloProvider>,
    {
      wrapper: BrowserRouter,
    }
  );
};
