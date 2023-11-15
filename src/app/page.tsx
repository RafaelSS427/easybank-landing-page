import { Articles, Hero } from "@/screens";
import Choose from "@/screens/home/Choose";
export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <Choose />
      <Articles />
    </div>
  )
}