import Head from "next/head";
import NewslettersTable from "@/components/tables/newsletters";

const Newsletter = () => {
  return (
    <>
      <Head>
        <title>Altitude - Newsletters</title>
      </Head>
      <div className="p-4">
        <NewslettersTable />
      </div>
    </>
  );
};

export default Newsletter;
