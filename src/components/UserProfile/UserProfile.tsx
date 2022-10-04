import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { useFragment } from "react-relay";

import { UserProfileFragment_user$key } from "./__generated__/UserProfileFragment_user.graphql";

export type UserProfileProps = {
  fragmentRef: UserProfileFragment_user$key;
};

export const UserProfile: FC<UserProfileProps> = (props) => {
  const { fragmentRef } = props;
  const data = useFragment<UserProfileFragment_user$key>(
    graphql`
      fragment UserProfileFragment_user on User {
        login
        avatarUrl(size: 80)
      }
    `,
    fragmentRef
  );

  const { login, avatarUrl } = data;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <img
        src={avatarUrl}
        alt=""
        width={80}
        height={80}
        style={{ borderRadius: "50%" }}
      />

      <div style={{ fontSize: 24, fontWeight: "bold" }}>{login}</div>
    </div>
  );
};
