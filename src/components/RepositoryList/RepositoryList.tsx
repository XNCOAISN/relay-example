import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { usePaginationFragment } from "react-relay";
import { RepositoryListItem } from "./RepositoryListItem";
import { RepositoryListFragmentQuery } from "./__generated__/RepositoryListFragmentQuery.graphql";
import { RepositoryListFragment_user$key } from "./__generated__/RepositoryListFragment_user.graphql";

export type RepositoryListProps = {
  fragmentRef: RepositoryListFragment_user$key;
  size: number;
};

export const RepositoryList: FC<RepositoryListProps> = (props) => {
  const { fragmentRef, size } = props;

  const { data, loadNext, hasNext, isLoadingNext } = usePaginationFragment<
    RepositoryListFragmentQuery,
    RepositoryListFragment_user$key
  >(
    graphql`
      fragment RepositoryListFragment_user on User
      @refetchable(queryName: "RepositoryListFragmentQuery") {
        repositories(
          first: $first
          after: $after
          orderBy: { field: PUSHED_AT, direction: DESC }
          ownerAffiliations: [OWNER]
          privacy: PUBLIC
        ) @connection(key: "RepositoryListFragment_repositories") {
          edges {
            node {
              id
              ...RepositoryListItemFragment_repository
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `,
    fragmentRef
  );

  if (!data) {
    return null;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {data.repositories.edges?.map((edge) => {
        if (!edge?.node) {
          return null;
        }
        return (
          <RepositoryListItem key={edge.node.id} fragmentRef={edge.node} />
        );
      })}
      {isLoadingNext ? (
        <div style={{ textAlign: "center" }}>loading...</div>
      ) : null}
      {hasNext ? (
        <button onClick={() => loadNext(size)}>Load more friends</button>
      ) : null}
    </div>
  );
};
