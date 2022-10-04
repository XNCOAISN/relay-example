import { graphql } from "babel-plugin-relay/macro";
import { FC, Suspense } from "react";
import { useLazyLoadQuery } from "react-relay";
import { RepositoryList } from "./RepositoryList";
import { RepositoryListContainerQuery } from "./__generated__/RepositoryListContainerQuery.graphql";

export type RepositoryListContainerProps = {
  login: string;
  size?: number;
};

export const RepositoryListContainer: FC<RepositoryListContainerProps> = (
  props
) => {
  const { login, size = 5 } = props;

  const data = useLazyLoadQuery<RepositoryListContainerQuery>(
    graphql`
      query RepositoryListContainerQuery(
        $login: String!
        $first: Int
        $after: String
      ) {
        user(login: $login) @required(action: LOG) {
          isViewer
          ...RepositoryListFragment_user
        }
      }
    `,
    {
      login,
      first: size,
      after: null,
    }
  );

  if (!data) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading</div>}>
      <RepositoryList fragmentRef={data.user} size={size} />
    </Suspense>
  );
};
