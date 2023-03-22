type Random = {
  photo: string
  phrase: string
}


type Props = {
  random: Random
  onClick: () => void
}

const Main = ({ random, onClick }: Props) => {
  return (
    <main className="my-20 w-screen flex justify-center">
      <div className="card card-side bg-base-100 shadow-xl w-2/4">
        <figure>
          <img src={`/img/${random.photo}`} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{random.phrase}</h2>
          <div className="card-actions justify-end mt-28">
            <button onClick={onClick} className="btn btn-accent">refresh</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
