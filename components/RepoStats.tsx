import React, { useMemo } from "react";
import { useRepo } from "hooks/useRepo";
import type { Repos } from "types/Repo";
import { PieChart, PieData } from "./visualize/PieChart";

interface Props {
  username: string;
}

const getRepoStats = (repos: Repos | undefined) => {
  if (repos === undefined) return undefined;

  const langPieChart: PieData[] = [];
  const countLang: Record<string, number> = {};

  repos.forEach((repo) => {
    if (repo.language === null) return;

    if (countLang[repo.language] === undefined) {
      countLang[repo.language] = 1;
    } else {
      countLang[repo.language] = ++countLang[repo.language];
    }
  });

  for (const key in countLang) {
    const total = countLang[key];
    langPieChart.push({ label: key, data: total });
  }

  return langPieChart;
};

export const RepoStats: React.FC<Props> = ({ username }) => {
  const { repos, isError } = useRepo(username);

  // TODO: Repo Size, Language, Stargazers Map
  const computed = useMemo(() => getRepoStats(repos), [repos]);

  if (isError) {
    <Container>
      <h1>Error Occured fetching repos</h1>
    </Container>;
  }

  if (repos) {
    return (
      <div className="flex flex-col w-full">
        {/* {repos.map((repo) => (
          <p key={repo.id} className="text-white">
            {repo.name}
          </p>
        ))} */}
        <PieChart width={400} height={400} data={computed || []} />
      </div>
    );
  }

  return (
    <div>
      <p>Loading repos</p>
    </div>
  );
};

const Container: React.FC = ({ children }) => (
  <div className="text-center">{children}</div>
);
