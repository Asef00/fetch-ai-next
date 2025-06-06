import Image from "next/image";

const infoCards = [
  {
    title: "Machine Learning",
    description:
      "In house developed computer systems that are able to learn and adapt without following explicit instructions, by using algorithms and statistical models to analyze and draw inferences.",
    icon: "/images/ml-icon.gif",
  },
  {
    title: "Vast Data Clusters",
    description:
      "Through a unique discovery process that partitions data sets into groups of high similarity the Fetch AI is able to mine gems specific to the conditions users input.",
    icon: "/images/data-icon.gif",
  },
  {
    title: "Pattern Recognition",
    description:
      "Fetch AI automatically recognizes patterns, regularities and irregularities in data, all in real time. Fetch can act on TA indicators before they ever exist by accurately predicting market moves. Keeping you a step ahead of all other traders.",
    icon: "/images/pattern-icon.gif",
  },
  {
    title: "Algorithmic Analyses",
    description:
      "The computational complexity of Fetch enables the processing of several million data points per task. As cryptocurrencies continue to grow and increase in complexity so will Fetch AI.",
    icon: "/images/algo-icon.gif",
  },
];

const currentChoice = {
  name: "SHIBA",
  contract: "0xb84cbbf09b3ed388a45cd875ebba41a20365e6e7",
  price: "0.000000003 USD",
  date: "Feb 19, 2023",
  exchange: "MEXC or DEX",
};

const stats = [
  { label: "Coins Analyzed", value: "1,200+" },
  { label: "Total Datapoints", value: "2,500,000+" },
  { label: "Success Probability", value: "78%" },
];

const pastResults = [
  {
    name: "LAVAX",
    gain: "+167%",
    discovered: "March 3, 15:18 GMT",
    priceAtDiscovery: "$0.02362",
    peak: "March 4, 15:27 GMT",
    priceAtPeak: "$0.06308",
  },
  {
    name: "SIMP",
    gain: "+41%",
    discovered: "April 2, 06:30 GMT",
    priceAtDiscovery: "$0.02475",
    peak: "April 4, 14:00 GMT",
    priceAtPeak: "$0.03500",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b text-white font-sans bg-[url('/bg-pattern.jpg')]">
      {/* hero */}
      <section className="p-20">
        <h1 className="text-3xl md:text-5xl font-medium mb-10 text-right">
          Fetch AI - by Skeletor
          <br />
          Fetching You Top Gainers Each Week
          </h1>
        <Image src="/hero.gif" alt="Fetch AI Hero" width={2408} height={1092} className="mx-auto mb-4" />
      </section>
      {/* info cards */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 mb-12">
        {infoCards.map((card) => (
          <div key={card.title} className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <Image src={card.icon} alt={card.title} width={64} height={64} className="mb-4" />
            <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-300 text-sm text-center">{card.description}</p>
          </div>
        ))}
      </section>
      {/* stats */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center">
            <div className="text-3xl font-bold mb-2">{stat.value}</div>
            <div className="text-gray-300">{stat.label}</div>
          </div>
        ))}
      </section>
      {/* past results */}
      <section className="px-4 mb-12">
        <div className="flex justify-between items-top">
          <h3 className="text-2xl md:text-7xl mb-6">Past Results</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-sm flex items-top gap-3">
            <span className="text-2xl">*</span>
            Past results are not indicative of future results. Fetch AI predictions are not financial advice. Traders use this information at their own risk.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastResults.map((result) => (
            <div key={result.name} className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-lg">{result.name}</span>
                <span className="text-green-400 font-bold">{result.gain}</span>
              </div>
              <div className="text-gray-300 text-sm mb-1">Discovered {result.discovered}</div>
              <div className="text-gray-300 text-sm mb-1">Price at Discovery: {result.priceAtDiscovery}</div>
              <div className="text-gray-300 text-sm mb-1">Peak: {result.peak}</div>
              <div className="text-gray-300 text-sm">Price at Peak: {result.priceAtPeak}</div>
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-4">Past results are not indicative of future results. Fetch AI predictions are not financial advice. Traders use this information at their own risk.</div>
      </section>
    </div>
  );
}
