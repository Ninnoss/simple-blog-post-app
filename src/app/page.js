import Posts from './posts/page';

export default function Home() {
  return (
    <main className="py-6 md:py-12 xl:py-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mt-6 lg:mt-0 font-semibold">Posts</h1>
      <Posts />
    </main>
  );
}
