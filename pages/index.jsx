import Head from "next/head";
import Layout from "./Component/Layout";
import { useEffect, useState } from "react";
// import { AiFillStar } from "react-icons/ai";
// import { GiSpeaker } from "react-icons/gi";
import Link from "next/link";

function Home() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  // const [url, setUrl] = useState("");
  // const [suara, setSuara] = useState({});

  useEffect(() => {
    if (loading) return;
    fetch(" https://mocki.io/v1/237ae418-b71c-4d45-bd77-dc8a632071eb")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });

    return () => {
      setLoading(true);
    };
  }, [loading]);

  // useEffect(() => {
  //   let suara = new Audio(url);
  //   setSuara(suara);
  // }, [url]);
  // const run = () => {
  //   console.log(suara);
  //   if (suara.paused) {
  //     suara.play();
  //     suara.currentTime = 0;
  //   } else {
  //     suara.pause();
  //   }
  // };
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
      <Layout>
        <div className="px-4 my-4">
          <div className="grid grid-cols-2 gap-x-3 gap-y-3">
            <Card datagw={data} />
          </div>
        </div>
      </Layout>
    </>
  );
}

const Card = ({ datagw }) => {
  if (!datagw && datagw?.length <= 0) return <div>Loading</div>;

  return datagw?.map((a) => {
    return (
      <Link href={`/talentProfile?id=${a.key}`} key={a.key}>
        <div className="h-60 relative bg-secondary rounded-lg">
          <div className="h-40 absolute w-full items-end flex">
            <div className="flex items-center justify-between px-2 w-full absolute">
              <h1 className="text-lg font-bold text-accent shadow-sm">
                {a.name}, {a.umur}
              </h1>
              <h1 className="text-xs font-bold font-TEST text-accent ">
                {a.price["time"] === 60 ? "1h" : `${a.price["time"]}m`}/
                {a.price["tag"]}k
              </h1>
            </div>
          </div>

          {/* <div className="flex h-44 items-end absolute ">
          <h1 className="text-sm">{a.rating}</h1>
          <AiFillStar className="" />
        </div> */}
          <picture>
            <img
              className="object-cover  rounded-t-lg w-full h-40"
              src={a.image}
              alt={a.name}
            ></img>
          </picture>
          <div className="px-2 flex justify-between items-center">
            {/* <button
            onClick={() => {
              run();
              setUrl(a.audio);
            }}
            className=""
          >
            <GiSpeaker className="w-6 h-6 fill-black" />
          </button> */}
          </div>

          <div className="px-2 mt-3 flex flex-wrap gap-1">
            {a.prompt.map((b) => (
              <div
                key={a.key}
                className="bg-primary rounded-md w-fit py-1 px-3 "
              >
                <h1 className="font-bold text-xs">{b}</h1>
              </div>
            ))}
          </div>
        </div>
      </Link>
    );
  });
};

export default Home;
