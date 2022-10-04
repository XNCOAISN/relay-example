/**
 * @generated SignedSource<<d4201c82a8942aa665218fb143986868>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryListItemLanguageListItemFragment_language$data = {
  readonly color: string | null;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "RepositoryListItemLanguageListItemFragment_language";
};
export type RepositoryListItemLanguageListItemFragment_language$key = {
  readonly " $data"?: RepositoryListItemLanguageListItemFragment_language$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryListItemLanguageListItemFragment_language">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryListItemLanguageListItemFragment_language",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "color",
      "storageKey": null
    }
  ],
  "type": "Language",
  "abstractKey": null
};

(node as any).hash = "d04a78f2dd76122d981e112d5427bd65";

export default node;
