/**
 * @generated SignedSource<<21ec33e078d2ce3056fee0650fc346c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryListItemFragment_repository$data = {
  readonly id: string;
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryListItemLanguageListFragment_repository">;
  readonly " $fragmentType": "RepositoryListItemFragment_repository";
};
export type RepositoryListItemFragment_repository$key = {
  readonly " $data"?: RepositoryListItemFragment_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryListItemFragment_repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryListItemFragment_repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RepositoryListItemLanguageListFragment_repository"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "ad61642065a57705ae2dfe7e3654d171";

export default node;
