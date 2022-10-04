import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { RequestParameters } from "relay-runtime/lib/util/RelayConcreteNode";
import { Variables } from "relay-runtime/lib/util/RelayRuntimeTypes";

async function fetcher(params: RequestParameters, variables: Variables) {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return await response.json();
}

export const environment = new Environment({
  network: Network.create(fetcher),
  store: new Store(new RecordSource()),
});
