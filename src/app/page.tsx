import Menubar from "@/components/home/Menubar";
import Hero from '@/components/home/Hero'
import { heroAssets } from "@/lib/hero";

export default function Home() {
  const heroProps = heroAssets;
  return (
    <>
      <Menubar />
      <Hero bannerProps={heroProps.bannerProps} topAdBanner={heroProps.topAdBanner} bottomAdBanner={heroProps.bottomAdBanner}/>
    </>
  );
}
