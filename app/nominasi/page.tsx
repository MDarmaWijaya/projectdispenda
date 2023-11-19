import Link from 'next/link';

type Data = {
  ID: string;
  KELURAHAN: string;
  KECAMATAN: string;
  JML: number;
  TOTAL: string;
  DENDA: number;
  JUMLAH: number;
};

async function getData() {
  const res = await fetch('http://103.140.188.145:81/apiftf/public/cobatestersssss', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Totreadesa() {
  const data: Data[] = await getData();
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <Link href="/">
          <button className="btn btn-secondary text-xl">Back To Home</button>
        </Link>
        <h1 className="mx-auto">API 5</h1>
      </div>
      <table className="table w-full mt-5">
        <thead>
          <tr className="bg-base-200">
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
            <tr key={data.ID}>
              <td>{index + 1}</td>
              <td>{data.ID}</td>
              <td>{data.KELURAHAN}</td>
              <td>{data.KECAMATAN}</td>
              <td>{data.JML}</td>
              <td>{data.TOTAL}</td>
              <td>{data.DENDA}</td>
              <td>{data.JUMLAH}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
