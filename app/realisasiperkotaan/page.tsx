import Link from 'next/link';

type Data = {
  IDSS: string;
  KELURAHANSS: string;
  KECAMATANSS: string;
  JMLSS: number;
  TOTALSS: number;
  DENDASS: number;
  JUMLAHSS: number;
};

async function getData() {
  const res = await fetch('http://103.140.188.145:81/apiftf/public/cobatestersss', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Realisasiperkotaan() {
  const data: Data[] = await getData();
  return (
    <>
      <div className="navbar bg-primary text-primary-content flex justify-content-center">
        <Link href="/">
          <button className="btn btn-secondary text-xl">Back To Home</button>
        </Link>
        <h1 className="mx-auto">API 3</h1>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>NO</th>
            <th>IDSS</th>
            <th>KELURAHANSS</th>
            <th>KECAMATANSS</th>
            <th>JMLSS</th>
            <th>TOTALSS</th>
            <th>DENDASS</th>
            <th>JUMLAHSS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr key={data.IDSS}>
              <td>{index + 1}</td>
              <td>{data.IDSS}</td>
              <td>{data.KELURAHANSS}</td>
              <td>{data.KECAMATANSS}</td>
              <td>{data.JMLSS}</td>
              <td>{data.TOTALSS}</td>
              <td>{data.DENDASS}</td>
              <td>{data.JUMLAHSS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
