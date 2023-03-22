import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Modal from "@/components/Modal";
import api from "@/services/api";
import { useEffect, useState } from "react";

type Random = {
  photo: string
  phrase: string
}

export default function Home() {
  
  const [random, setRandom] = useState<Random>()

  useEffect(() => {
    getRandom();
  }, [])

  const getRandom = async () => {
    const random = await api.get();
    setRandom(random);
  }



  return (
    <div className="flex flex-col w-screen justify-around">


      <Header />
      {random&&
        <Main random={random} onClick={() => getRandom()} />
      }
      <Modal />
      <Footer />      
    </div>
  )
}
