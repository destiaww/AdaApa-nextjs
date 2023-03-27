import { Carousel, Highlight, Feed, Terkini, Banner, RootLayout } from 'ahmad/components';
import Data from 'ahmad/public/data/data';

export default function Home() {
  const filterData = Data.filter((item) => item.terkini);
  return (
    <>
      <RootLayout title="AdaApa - Berita hari ini di Indonesia">
        <main>
          <Carousel data={Data} />
          <Highlight data={Data} />
          <Feed data={filterData} link={`detail`} title="Berita Terkini" />
          <Terkini data={Data} />
          <Banner />
        </main>
      </RootLayout>
    </>
  );
}
