import { useRepo } from "hooks/useRepo";
import React from "react";

interface Props {
  username: string;
}

export const RepoStats: React.FC<Props> = ({ username }) => {
  const { repos, isLoading, isError } = useRepo(username);

  if (isLoading) {
    <Container>
      <h1>Hello</h1>
    </Container>;
  }

  if (repos) {
    console.log(repos);

    return (
      <div className="flex flex-col w-full">
        {repos.map((repo) => (
          <p key={repo.id} className="text-white">
            {repo.name}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p>Unknown error occured</p>
    </div>
  );
};

const Container: React.FC = ({ children }) => (
  <div className="text-center">{children}</div>
);
