import Link from 'next/link';

type Data = {
  ID: string;
  KELURAHAN: string;
  KECAMATAN: string;
  JML: number;
  TOTAL: number;
  DENDA: number;
  JUMLAH: number;
};

async function getData() {
  const res = await fetch('http://103.140.188.145:81/apiftf/public/cobatesterssss', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function totreadesa() {
  const data: Data[] = await getData();
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <Link href="/">
          <button className="btn btn-secondary text-xl">Back To Home</button>
        </Link>
        <h1 className="mx-auto">API 4</h1>
      </div>

      <table className="table w-full">
        <thead>
          <tr>
            <th>NO</th>
            <th>ID</th>
            <th>KELURAHAN</th>
            <th>KECAMATAN</th>
            <th>JML</th>
            <th>TOTAL</th>
            <th>DENDA</th>
            <th>JUMLAH</th>
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
