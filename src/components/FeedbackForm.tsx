import type { FormEvent } from "react";
import { useState } from "react";

export default function Form() {

    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const target = event.target as typeof event.target & {
        name: { value: string };
        email: { value: string };
        message: { value: string };
      };
      const data = {
        contactName: target.name,
        contactEmail: target.email,
        message: target.message
      };

      //call to the Netlify Function you created
      fetch("./.netlify/functions/triggerSubscribeEmail", {
        method: "POST",
        body: JSON.stringify({
          contactName: data.contactName,
          contactEmail: data.contactEmail,
          message: data.message,
          // subscriberName: data.subscriberName,
          // subscriberEmail: data.subscriberEmail,
          // inviteeEmail: "info@netlify.com"
        })
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" id="name" name="name" required />
        </label>
        <label>
          Email
          <input type="email" id="email" name="email" required />
        </label>
        <label>
          Message
          <textarea id="message" name="message" required />
        </label>
        <button>Send</button>
        {/* {responseMessage && <p>{responseMessage}</p>} */}
      </form>
    );
  }