/**
 * @generated SignedSource<<c09994e2433121cac19df81360ab5aae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserProfileFragment_user$data = {
  readonly avatarUrl: any;
  readonly login: string;
  readonly " $fragmentType": "UserProfileFragment_user";
};
export type UserProfileFragment_user$key = {
  readonly " $data"?: UserProfileFragment_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserProfileFragment_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserProfileFragment_user",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "2e1aa5273d5950d49867b1ee40d7e393";

export default node;
