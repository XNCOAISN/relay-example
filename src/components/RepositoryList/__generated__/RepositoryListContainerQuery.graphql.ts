/**
 * @generated SignedSource<<9c405166817534ae2e610b48985a68dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryListContainerQuery$variables = {
  after?: string | null;
  first?: number | null;
  login: string;
};
export type RepositoryListContainerQuery$data = {
  readonly user: {
    readonly isViewer: boolean;
    readonly " $fragmentSpreads": FragmentRefs<"RepositoryListFragment_user">;
  };
} | null;
export type RepositoryListContainerQuery = {
  response: RepositoryListContainerQuery$data;
  variables: RepositoryListContainerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "login"
},
v3 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isViewer",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "direction": "DESC",
      "field": "PUSHED_AT"
    }
  },
  {
    "kind": "Literal",
    "name": "ownerAffiliations",
    "value": [
      "OWNER"
    ]
  },
  {
    "kind": "Literal",
    "name": "privacy",
    "value": "PUBLIC"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryListContainerQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v3/*: any*/),
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "RepositoryListFragment_user"
            }
          ],
          "storageKey": null
        },
        "action": "LOG",
        "path": "user"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "RepositoryListContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RepositoryEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Repository",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 5
                          }
                        ],
                        "concreteType": "LanguageConnection",
                        "kind": "LinkedField",
                        "name": "languages",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Language",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v6/*: any*/),
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "color",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "languages(first:5)"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "filters": [
              "orderBy",
              "ownerAffiliations",
              "privacy"
            ],
            "handle": "connection",
            "key": "RepositoryListFragment_repositories",
            "kind": "LinkedHandle",
            "name": "repositories"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f558715cceb618f9815cdd316685459a",
    "id": null,
    "metadata": {},
    "name": "RepositoryListContainerQuery",
    "operationKind": "query",
    "text": "query RepositoryListContainerQuery(\n  $login: String!\n  $first: Int\n  $after: String\n) {\n  user(login: $login) {\n    isViewer\n    ...RepositoryListFragment_user\n    id\n  }\n}\n\nfragment RepositoryListFragment_user on User {\n  repositories(first: $first, after: $after, orderBy: {field: PUSHED_AT, direction: DESC}, ownerAffiliations: [OWNER], privacy: PUBLIC) {\n    edges {\n      node {\n        id\n        ...RepositoryListItemFragment_repository\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      startCursor\n      endCursor\n      hasNextPage\n      hasPreviousPage\n    }\n  }\n  id\n}\n\nfragment RepositoryListItemFragment_repository on Repository {\n  id\n  name\n  ...RepositoryListItemLanguageListFragment_repository\n}\n\nfragment RepositoryListItemLanguageListFragment_repository on Repository {\n  languages(first: 5) {\n    nodes {\n      ...RepositoryListItemLanguageListItemFragment_language\n      id\n    }\n  }\n}\n\nfragment RepositoryListItemLanguageListItemFragment_language on Language {\n  id\n  name\n  color\n}\n"
  }
};
})();

(node as any).hash = "6a01f73cb0b75c23bf86c4386e16bdf0";

export default node;
