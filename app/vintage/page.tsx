import ItemPanel from '@/components/ItemPanel';
import Navbar from '@/components/navbar/navbar';
import { getVintageTag } from '@/lib/variables';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vintage - Pinup',
  description: '...',
};

export const dynamic = 'force-dynamic';
export default function Page() {
  const tag = getVintageTag();
  return (
    <main>
      <Navbar />
      <div>
        {/* <h1 className='m-2 text-xl'>showing: all vintage products</h1> */}
        <ItemPanel type={tag} numItems={150} />
      </div>
    </main>
  );
}
