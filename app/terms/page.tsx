import { getMarkdownContent } from "@/lib/markdown";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MarkdownContent from "../components/MarkdownContent";

export const metadata = {
  title: "利用規約 | ここピン",
};

export default function TermsPage() {
  const content = getMarkdownContent("terms.md");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-10">
        <MarkdownContent content={content} />
      </main>
      <Footer />
    </div>
  );
}
