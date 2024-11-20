export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to my site.
      </h1>
      <p className="mb-4">
        {`I'm Maria, a junior software engineer based in Sydney.
         Have a look through my portfolio to learn more about my skillset and how I could help you solve your tech problems.`}
      </p>
      <div className="my-8">
        <img src="/assets/profile.jpeg" alt="Maria's profile" className="w-[300px]" />
      </div>
    </section>
  )
}
