export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_AUTH_KEY}`,
    },
  });

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    throw error;
  }

  return res.json();
};
