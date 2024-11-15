import { Button } from "@/components/ui/button";
import UserButton from "@/app/dashboard/_components/user-button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="bg-brand-green/50 min-h-screen">
      <header>
        <div className="container mx-auto h-16 flex items-center justify-between">
          <Link className='' href='/'>
            <span className='sr-only'>Mokker</span>
            <Image
              className='h-10 w-auto'
              src={`/logo.svg`}
              alt='Mokker - Study smarter with mocks exams'
              width={1000}
              height={1000}
            />
          </Link>

          <nav className='flex items-center gap-x-4'>
            <UserButton />
          </nav>
        </div>
      </header>

      <section>
        <div className="h-[80vh] max-w-4xl mx-auto text-center flex flex-col gap-y-6 justify-center items-center">
          <h1 className="text-6xl uppercase font-extrabold">Turns notes into smart flashcards for exams and reach the A+</h1>
          <p className="max-w-2xl">From notes to study aids in just a few clicks - your smarter learning journey starts here. Simply input your content, let our AI create flashcards, and export them for effortless studying on your terms.</p>
          <Button className="bg-brand-green " asChild>
            <Link href={`/dashboard`}>Get Started for Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
