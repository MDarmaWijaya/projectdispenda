import Link from 'next/link';

type Data = {
  IDS: string;
  KELURAHANS: string;
  KECAMATANS: string;
  JMLS: number;
  TOTALS: number;
  DENDAS: number;
  JUMLAHS: number;
};

async function getData() {
  const res = await fetch('http://103.140.188.145:81/apiftf/public/cobatesterss', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Totreadesa() {
  const data: Data[] = await getData();
  return (
    <>
      <div className="navbar bg-primary text-primary-content flex justify-content-center">
        <Link href="/">
          <button className="btn btn-secondary text-xl">Back To Home</button>
        </Link>
        <h1 className="mx-auto">API 2</h1>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>NO</th>
            <th>IDS</th>
            <th>KELURAHANS</th>
            <th>KECAMATANS</th>
            <th>JMLS</th>
            <th>TOTALS</th>
            <th>DENDAS</th>
            <th>JUMLAHS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={data.IDS}>
              <td>{index + 1}</td>
              <td>{data.IDS}</td>
              <td>{data.KELURAHANS}</td>
              <td>{data.KECAMATANS}</td>
              <td>{data.JMLS}</td>
              <td>{data.TOTALS}</td>
              <td>{data.DENDAS}</td>
              <td>{data.JUMLAHS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
