import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">API Route</button>
      </div>
      <div className="container sm:px-5 py-5">
        <div className="sm:flex sm:flex-direction-column sm:gap-4">
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">API 1</h2>
              <p>Data Penduduk Lampung</p>
              <div className="card-actions justify-end">
                <Link href="/realisasipedesaan">
                  <button className="btn">See Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">API 2</h2>
              <p>Data Penduduk Lampung</p>
              <div className="card-actions justify-end">
                <Link href="/totreadesa">
                  <button className="btn">See Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">API 3</h2>
              <p>Data Penduduk Lampung</p>
              <div className="card-actions justify-end">
                <Link href="/realisasiperkotaan">
                  <button className="btn">See Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">API 4</h2>
              <p>Data Penduduk Lampung</p>
              <div className="card-actions justify-end">
                <Link href="/totreakota">
                  <button className="btn">See Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">API 5</h2>
              <p>Data Penduduk Lampung</p>
              <div className="card-actions justify-end">
                <Link href="/nominasi">
                  <button className="btn">See Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
