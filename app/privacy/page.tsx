import { getMarkdownContent } from "@/lib/markdown";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MarkdownContent from "../components/MarkdownContent";

export const metadata = {
  title: "プライバシーポリシー | ここピン",
};

export default function PrivacyPage() {
  const content = getMarkdownContent("privacy.md");

  return (
    <div className="min-h-screen flex flex-col">
      <Header pageTitle="プライバシーポリシー" />
      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-10">
        <MarkdownContent content={content} />
      </main>
      <Footer />
    </div>
  );
}
