import { graphql } from "babel-plugin-relay/macro";
import type { FC } from "react";
import { useFragment } from "react-relay";
import { RepositoryListItemLanguageList } from "./RepositoryListItemLanguageList";
import { RepositoryListItemFragment_repository$key } from "./__generated__/RepositoryListItemFragment_repository.graphql";

export type RepositoryListItemProps = {
  fragmentRef: RepositoryListItemFragment_repository$key;
};

export const RepositoryListItem: FC<RepositoryListItemProps> = (props) => {
  const { fragmentRef } = props;

  const data = useFragment<RepositoryListItemFragment_repository$key>(
    graphql`
      fragment RepositoryListItemFragment_repository on Repository {
        id
        name
        ...RepositoryListItemLanguageListFragment_repository
        # languages(first: 5) @required(action: LOG) {
        #   nodes @required(action: LOG) {
        #     ...RepositoryListItemLanguagesFragment_languages
        #   }
        # }
      }
    `,
    fragmentRef
  );

  if (!data) {
    return null;
  }

  return (
    <div
      style={{
        padding: 16,
        backgroundColor: "#eee",
        borderRadius: 4,
      }}
    >
      <div
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {data.name}
      </div>
      <RepositoryListItemLanguageList fragmentRef={data} />
    </div>
  );
  // return <RepositoryListItemLanguages fragmentRef={data.languages.nodes} />;
  // const repositoryProps: RepositoryProps = {
  //   name: data.name,
  //   languages:
  //     data.languages?.edges?.map((edge) => ({
  //       name: edge?.node.name ?? "",
  //       color: edge?.node.color ?? "",
  //     })) ?? [],
  // };

  // return <Repository {...repositoryProps} />;
};
