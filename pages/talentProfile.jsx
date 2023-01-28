import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "./Component/Layout";

export default function TalentProfile() {
  const router = useRouter();
  const [data, setData] = useState({});
  console.log(data);
  function getUserData() {
    fetch(" https://mocki.io/v1/237ae418-b71c-4d45-bd77-dc8a632071eb")
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          const filtered = json.filter(
            (talent) => talent.key == router.query.id
          )[0];
          setData(filtered);
        }
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    let fetch = true;
    if (!fetch) return;
    getUserData();

    return () => {
      fetch = false;
    };
  }, [router.query.id]);

  // console.log(data);

  if (data !== undefined && Object.keys(data).length <= 0) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Layout>
        <div className=" px-4 my-4 relative">
          <picture>
            <img
              src={data.image}
              alt={data.name}
              className="h-72 w-40 rounded-lg object-cover absolute"
            />
          </picture>
          <div className="w-full flex justify-end">
            <div className="w-2/3 h-56 bg-secondary mt-4 rounded-lg pl-14 py-2">
              <h1 className="text-2xl text-accent font-bold">
                {data.name}, {data.umur}
              </h1>
              <div className="">
                <h1 className="font-light text-xs">
                  {/* {data[bio].subString(0, 4)} */}
                  {console.log(data.bio)}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
