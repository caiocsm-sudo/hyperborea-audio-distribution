import "@/styles/about.scss"

export default async function About() {
  const res = await fetch("http://localhost:3000/api/artists")
  const data = await res.json()

  console.log(data)

  return (
    <article>
      <div>
        <h1>Hyperborea Audio Recordings</h1>
        <p>baby</p>
      </div>
      <p>
        {data ? (
          <span>
            {data.name}, {data.real_name}
          </span>
        ) : (
          ""
        )}
      </p>
    </article>
  )
}
