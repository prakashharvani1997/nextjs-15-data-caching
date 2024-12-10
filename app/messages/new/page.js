import { redirect } from 'next/navigation';

import { addMessage } from '@/lib/messages';
import { revalidatePath } from 'next/cache';

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';

    const message = formData.get('message');
    addMessage(message);

    // Revalidate data for specific page
    revalidatePath('/messages')

    // revalidate path of diffrent pages 
    revalidatePath('/messages')


    // revalidate data for all pages 
    revalidatePath('/','/layout')


    
    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
