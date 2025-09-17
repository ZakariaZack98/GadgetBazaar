import Menubar from "@/components/home/Menubar";
import Hero from '@/components/home/Hero'
import { heroAssets } from "@/lib/hero";
import ShopByCategory from "@/components/home/ShopByCategory";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BannerSection from "@/components/home/BannerSection";

export default function Home() {
  const heroProps = heroAssets;
  return (
    <>
      <Menubar />
      <Hero bannerProps={heroProps.bannerProps} topAdBanner={heroProps.topAdBanner} bottomAdBanner={heroProps.bottomAdBanner}/>
      <ShopByCategory/>
      <FeaturedProducts/>
      <BannerSection/>
    </>
  );
}
