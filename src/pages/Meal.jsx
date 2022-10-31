import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Meal() {
  const { id } = useParams()
  const [meal, setMeal] = useState({})

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMeal(data['meals'][0]))
  }, [])

  return (
    <article className="max-w-3xl p-8 pb-16 mx-auto">
      <div className="flex flex-col gap-6">
        <h2 className="text-5xl font-bold">{meal.strMeal}</h2>
        <h3 className="not-prose text-base-content/50">/{meal.strCategory}</h3>
      </div>
      <img className="py-12" src={meal.strMealThumb} />
      <p className="text-xl">{meal.strInstructions}</p>
      <p className="mt-6 italic text-base-content/50">Source: <a href={meal.strSource}>{meal.strSource}</a></p>
      <a href={meal.strYoutube} className="block mt-6 italic text-base-content/50 underline">Watch this on YouTube</a>
    </article>
  )
}

export default Meal;
