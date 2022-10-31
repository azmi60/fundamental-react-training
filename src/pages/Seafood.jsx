import { useEffect, useState } from "react";

function Seafood() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data["meals"]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h2 className="px-16 py-12 text-5xl font-bold">Seafood</h2>
      <div className="flex flex-wrap py-8 gap-12 mx-auto justify-center">
        {loading &&
          new Array(3)
            .fill(null)
            .map(() => (
              <div className="card w-64 h-80 bg-base-100 animate-pulse"></div>
            ))}
        {meals.map(({ idMeal, strMeal, strMealThumb }) => (
          <Card id={idMeal} title={strMeal} img={strMealThumb} />
        ))}
      </div>
    </>
  );
}

function Card({ id, title, img }) {
  return (
    <Link
      to={`/meal/${id}`}
      className="card card-compact w-64 bg-base-100 shadow-xl"
    >
      <figure>
        <img src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      </div>
    </Link>
  );
}

export default Seafood;
