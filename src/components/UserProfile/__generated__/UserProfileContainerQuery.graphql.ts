/**
 * @generated SignedSource<<c428f8a7c8b9df5bb6bb08bf03160845>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserProfileContainerQuery$variables = {
  login: string;
};
export type UserProfileContainerQuery$data = {
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"UserProfileFragment_user">;
  };
} | null;
export type UserProfileContainerQuery = {
  response: UserProfileContainerQuery$data;
  variables: UserProfileContainerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "login",
    "variableName": "login"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserProfileContainerQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "UserProfileFragment_user"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserProfileContainerQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "login",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 80
              }
            ],
            "kind": "ScalarField",
            "name": "avatarUrl",
            "storageKey": "avatarUrl(size:80)"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "394dc83ee164cd338a82ce2a1bd3b2ec",
    "id": null,
    "metadata": {},
    "name": "UserProfileContainerQuery",
    "operationKind": "query",
    "text": "query UserProfileContainerQuery(\n  $login: String!\n) {\n  user(login: $login) {\n    ...UserProfileFragment_user\n    id\n  }\n}\n\nfragment UserProfileFragment_user on User {\n  login\n  avatarUrl(size: 80)\n}\n"
  }
};
})();

(node as any).hash = "177c6b9007ed4433eb3cac4494961786";

export default node;
