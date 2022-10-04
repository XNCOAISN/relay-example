import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import { useFragment } from "react-relay";
import { RepositoryListItemLanguageListFragment_repository$key } from "./__generated__/RepositoryListItemLanguageListFragment_repository.graphql";

export type RepositoryListItemLanguageListProps = {
  fragmentRef: RepositoryListItemLanguageListFragment_repository$key;
};

export const RepositoryListItemLanguageList: FC<
  RepositoryListItemLanguageListProps
> = (props) => {
  const { fragmentRef } = props;

  const data =
    useFragment<RepositoryListItemLanguageListFragment_repository$key>(
      graphql`
        fragment RepositoryListItemLanguageListFragment_repository on Repository {
          languages(first: 5) @required(action: LOG) {
            nodes @required(action: LOG) {
              ...RepositoryListItemLanguageListItemFragment_language
            }
          }
        }
      `,
      fragmentRef
    );

  if (!data) {
    return null;
  }

  return <div></div>;
};
