import Image from "next/image";
import styles from "./page.module.css";
import Main from "@/components/Main";
import Trinity from "@/components/Trinity";
import Enquiry from "@/components/Enquiry";
import CurrentAffairs from "@/components/CurrentAffairs";
import Testmonials from "@/components/Testmonials";
import CoachingInfo from "@/components/CoachingInfo";
import SocialMediaFeed from "@/components/SocialMediaFeed";

export default function Home() {
  return (
    <main>
     
      
       <Main/>
       <Trinity/>
       <Enquiry/>
       <CurrentAffairs/>
       <Testmonials/>
       <CoachingInfo/>
       <SocialMediaFeed/>


       
    </main>
  );
}
