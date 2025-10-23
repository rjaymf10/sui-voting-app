import { useQuery } from "@tanstack/react-query";

const WalletView = () => {
  const { isPending, isFetching, data, error } = useQuery({
    queryKey: ["walletInfo"],
    queryFn: async () => {
      return await fetch("https://api.github.com/repos/TanStack/query").then(async (res) => {
        return await res.json();
      });
    }
  });

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error loading wallet info</div>;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Your Wallet Info</h1>
      </div>
      <div>
        <h2 className="mb-4 text-2xl font-semibold">{data.full_name}</h2>
        <p className="mb-2">{data.description}</p>
        <div>{isFetching ? "Updating" : ""}</div>
      </div>
    </>
  )
};

export default WalletView;