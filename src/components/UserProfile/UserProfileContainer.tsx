import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { useLazyLoadQuery } from "react-relay";
import { UserProfile } from "./UserProfile";
import { UserProfileContainerQuery } from "./__generated__/UserProfileContainerQuery.graphql";

export type UserProfileContainerProps = {
  login: string;
};

export const UserProfileContainer: FC<UserProfileContainerProps> = (props) => {
  const { login } = props;

  const data = useLazyLoadQuery<UserProfileContainerQuery>(
    graphql`
      query UserProfileContainerQuery($login: String!) {
        user(login: $login) @required(action: LOG) {
          ...UserProfileFragment_user
        }
      }
    `,
    {
      login,
    },
    {
      fetchPolicy: "store-or-network",
    }
  );

  if (!data) {
    return null;
  }

  return <UserProfile fragmentRef={data.user} />;
};
