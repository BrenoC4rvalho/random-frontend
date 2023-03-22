import api from "@/services/api";
import { useState } from "react";



const Modal = () => {

  const[phrase, setPhrase] = useState('');
  const[photo, setPhoto] = useState<File>()

  
  const createRandom = async (photo: File | undefined, phrase: string) => {
    if(photo == undefined) return
    await api.create(photo, phrase)
  }

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setPhoto(e.target.files[0]);
    }
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative flex flex-col">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" 
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
          <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs my-5"
            onChange={handlePhoto}
          />
          <button className="btn btn-outline btn-accent" onClick={() => createRandom(photo, phrase)}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Modal