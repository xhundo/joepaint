export function EmailTemp({
  first,
  last,
  phone,
  message,
  email,
  subject
}: {
  first: string;
  last: string;
  phone: string;
  subject: string;
  message: string;
  email: string;
}) {
  return (
    <div className="font-bold">
      <p>{`From: ${first} ${last}`}</p>
      <p>{subject}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <div className="mt-4">
        <article>{message}</article>
      </div>
    </div>
  );
}
