const PROPOSAL_COUNT = 7;

const ProposalItem = () => {
  return (
    <div className="p-4 transition-colors bg-white border rounded-lg shadow-sm dark:bg-gray-800 hover:border-blue-500">
      <p className="mb-2 text-xl font-semibold">Title: Hello There</p>
      <p className="text-gray-700 dark:text-gray-300">Desc: What is your vote ?</p>
    </div>
  );
};

const ProposalView = () => {
  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">New Proposals</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {new Array(PROPOSAL_COUNT).fill(1).map((id) =>
          <ProposalItem key={id * Math.random()} />
        )}
      </div>
    </>
  );
};

export default ProposalView;