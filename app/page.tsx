import Image from 'next/image';

const infoCards = [
  {
    title: 'Machine Learning',
    description:
      'In house developed computer systems that are able to learn and adapt without following explicit instructions, by using algorithms and statistical models to analyze and draw inferences.',
    icon: '/images/ml-icon.gif',
  },
  {
    title: 'Vast Data Clusters',
    description:
      'Through a unique discovery process that partitions data sets into groups of high similarity the Fetch AI is able to mine gems specific to the conditions users input.',
    icon: '/images/data-icon.gif',
  },
  {
    title: 'Pattern Recognition',
    description:
      'Fetch AI automatically recognizes patterns, regularities and irregularities in data, all in real time. Fetch can act on TA indicators before they ever exist by accurately predicting market moves. Keeping you a step ahead of all other traders.',
    icon: '/images/pattern-icon.gif',
  },
  {
    title: 'Algorithmic Analyses',
    description:
      'The computational complexity of Fetch enables the processing of several million data points per task. As cryptocurrencies continue to grow and increase in complexity so will Fetch AI.',
    icon: '/images/algo-icon.gif',
  },
];

const stats = [
  { label: 'Coins Analyzed', value: '1,200+' },
  { label: 'Total Datapoints', value: '2,500,000+' },
  { label: 'Success Probability', value: '78%' },
];

const pastResults = [
  {
    name: 'LAVAX',
    gain: '+167%',
    discovered: 'March 3, 15:18 GMT',
    priceAtDiscovery: '$0.02362',
    peak: 'March 4, 15:27 GMT',
    priceAtPeak: '$0.06308',
    date: 'March 2023',
  },
  {
    name: 'SIMP',
    gain: '+41%',
    discovered: 'April 2, 06:30 GMT',
    priceAtDiscovery: '$0.02475',
    peak: 'April 4, 14:00 GMT',
    priceAtPeak: '$0.03500',
    date: 'April 2023',
  },
];

export default function Home() {
  return (
    <main className="text-white font-sans bg-[url('/bg-pattern.jpg')]">
      {/* hero */}
      <section className="p-20">
        <h1 className="text-3xl md:text-5xl font-medium mb-10 text-right">
          Fetch AI - by Skeletor
          <br />
          Fetching You Top Gainers Each Week
        </h1>
        <Image
          src="/hero.gif"
          alt="Fetch AI Hero"
          width={2408}
          height={1092}
          className="mx-auto mb-4"
        />
      </section>
      {/* info cards */}
      <section className="flex gap-20 px-4 mb-12">
        <h2 className="text-2xl md:text-5xl mb-6 whitespace-nowrap">
          Price Prediction
          <br />
          Crypto AI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="border border-white py-3.5 px-2.5 shadow-lg flex flex-col"
            >
              <h3 className="font-semibold text-sm mb-4 whitespace-nowrap">
                <span className="text-2xl font-bold">0{index + 1}</span>
                <br />/ {card.title}
              </h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* stats */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mb-12">
        <Image
          src="/fetch.gif"
          alt="Fetch AI Hero"
          width={600}
          height={273}
          className="mx-auto"
        />
        <div className="flex flex-col max-w-md mx-auto">
          <h2 className="text-2xl md:text-5xl mb-6">
            <span className="text-sm mb-8">— The Future of Trading</span>
            <br />
            Profit
            <br />
            without limits
          </h2>
          <p className="mb-10">
            Fetch AI is constantly collecting data from the market, processing
            it, and sharing the results directly with you. Every few days Fetch
            AI will &apos;Fetch&apos; the coin with the highest probability of
            significant gains. Posting it for you directly on this webpage
          </p>
          <div className="flex flex-col gap-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex justify-between items-center font-bold"
              >
                <span className="">{stat.label}</span>
                <span className="">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* past results */}
      <section className="px-4 mb-12">
        <div className="flex justify-between items-top">
          <h3 className="text-2xl md:text-7xl mb-6 uppercase">Past Results</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-sm flex items-top gap-3">
            <span className="text-2xl">*</span>
            Past results are not indicative of future results. Fetch AI
            predictions are not financial advice. Traders use this information
            at their own risk.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastResults.map((result) => (
            <div
              key={result.name}
              className="border border-black p-6 shadow-lg"
            >
              <div className="flex justify-start gap-2 mb-2 text-3xl font-bold relative">
                <h4 className="inline">{result.name}</h4>
                <span className="text-green-400">{result.gain}</span>
                <span className="bg-white rounded-full h-3 w-3 absolute right-0"></span>
              </div>
              <div className="text-gray-300 text-sm mb-1">
                Discovered {result.discovered}
              </div>
              <div className="text-gray-300 text-sm mb-1">
                Price at Discovery: {result.priceAtDiscovery}
              </div>
              <div className="text-gray-300 text-sm mb-1">
                Peak: {result.peak}
              </div>
              <div className="text-gray-300 text-sm">
                Price at Peak: {result.priceAtPeak}
              </div>
              <div>{result.date}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
