import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { RelayEnvironmentProvider } from "react-relay";
import { environment } from "src/relay";
import { UserProfileContainer } from "src/components/UserProfile";
import { RepositoryListContainer } from "src/components/RepositoryList";

const LOGIN = process.env.REACT_APP_GITHUB_USERNAME;

const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <div>
            <div>{error.message}:</div>
            <div>{error.stack}</div>
          </div>
        )}
      >
        <Suspense fallback={<div>Loading</div>}>
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              margin: "0 auto",
              padding: 16,
              maxWidth: 800,
            }}
          >
            <UserProfileContainer login={LOGIN} />
            <RepositoryListContainer login={LOGIN} size={2} />
          </div>
        </Suspense>
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
};

export default App;
