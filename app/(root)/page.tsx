import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.webp"
        alt="banner"
        width={1200}
        height={1010}
        className="w-screen"
      />
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";
