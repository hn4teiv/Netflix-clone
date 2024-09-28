
import { getSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import Navbar from '@/components/Navbar';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  // Trả về props khi có session
  return {
    props: { }
  }
}

export default function Home() {
 
  return (
    <>
      <Navbar/>
    </>
  );
}
