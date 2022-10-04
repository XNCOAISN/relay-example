import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import { useFragment } from "react-relay";
import { RepositoryListItemLanguageListItemFragment_language$key } from "./__generated__/RepositoryListItemLanguageListItemFragment_language.graphql";

export type RepositoryListItemLanguageListItemProps = {
  fragmentRef: RepositoryListItemLanguageListItemFragment_language$key;
};

export const RepositoryListItemLanguageListItem: FC<
  RepositoryListItemLanguageListItemProps
> = (props) => {
  const { fragmentRef } = props;

  const data =
    useFragment<RepositoryListItemLanguageListItemFragment_language$key>(
      graphql`
        fragment RepositoryListItemLanguageListItemFragment_language on Language {
          id
          name
          color
        }
      `,
      fragmentRef
    );

  if (!data) {
    return null;
  }

  return <div>{data.name}</div>;
};
