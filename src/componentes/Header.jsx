export default function Header() {
 return (
  <header className="header">
   <img src={`${import.meta.env.BASE_URL}countres.png`} alt="countries image"
   />
   <h1>Countries</h1>
   <h2>Ferched live from REST Countries</h2>

  </header>

 )
}