export default function CountryName({name, capital}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Capital: {capital || "No capital listed"}</p>
        </div>
    )
}