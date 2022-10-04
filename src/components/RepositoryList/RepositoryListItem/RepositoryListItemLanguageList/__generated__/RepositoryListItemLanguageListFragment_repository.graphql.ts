/**
 * @generated SignedSource<<bfbd0c1abc059e40c0886db057a761e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryListItemLanguageListFragment_repository$data = {
  readonly languages: {
    readonly nodes: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"RepositoryListItemLanguageListItemFragment_language">;
    } | null>;
  };
  readonly " $fragmentType": "RepositoryListItemLanguageListFragment_repository";
} | null;
export type RepositoryListItemLanguageListFragment_repository$key = {
  readonly " $data"?: RepositoryListItemLanguageListFragment_repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryListItemLanguageListFragment_repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryListItemLanguageListFragment_repository",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
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
            "kind": "RequiredField",
            "field": {
              "alias": null,
              "args": null,
              "concreteType": "Language",
              "kind": "LinkedField",
              "name": "nodes",
              "plural": true,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RepositoryListItemLanguageListItemFragment_language"
                }
              ],
              "storageKey": null
            },
            "action": "LOG",
            "path": "languages.nodes"
          }
        ],
        "storageKey": "languages(first:5)"
      },
      "action": "LOG",
      "path": "languages"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "bae14219f741dae5c53e173a69e94c84";

export default node;
