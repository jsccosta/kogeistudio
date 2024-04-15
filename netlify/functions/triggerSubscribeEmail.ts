import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {

    contactName: string;
    contactEmail: string;
    message: string;
  };

  console.log({
    from: requestBody.contactName,
    name: requestBody.contactEmail,
    email: requestBody.message,
  })

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(`${process.env.URL}/.netlify/functions/emails/subscribed`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: "POST",
    body: JSON.stringify({
      from: 'contact@kogeistudio.com',
      to: 'contact@kogeistudio.com',
      subject: "You have new mail",
      parameters: {
        contactName: requestBody.contactName,
        contactEmail: requestBody.contactEmail,
        message: requestBody.message
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Email sent!"),
  };
};

export { handler };
