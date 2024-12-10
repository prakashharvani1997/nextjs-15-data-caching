import Messages from '@/components/messages';
import { unstable_noStore } from 'next/cache';

// export const revalidate = 5;

export const dynamic = 'force-dynamic' // is equal to cache : 'no-store'

export default async function MessagesPage() {
  // unstable_noStore()  // Same as dynamic / cache : no-store
  const response = await fetch('http://localhost:8080/messages', {

    next:{
      tags :['msg']
    }
    // next:{
    //   revalidate : 5
    // }

    // cache : 'no-store'


    // headers: {
    //   'X-ID': 'page',
    // },
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
