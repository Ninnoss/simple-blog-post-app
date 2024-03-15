import Posts from './posts/page';

export default function Home() {
  return (
    <main className="py-6 md:py-12 xl:py-24">
      <h1 className="text-2xl md:text-4xl lg:text-5xl text-center">Posts</h1>
      <Posts />
    </main>
  );
}
