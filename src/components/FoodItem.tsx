import { Fodmap } from "../types/Fodmap";
import carrot from "../icons/carrot-solid.svg";

type FoodItemProps = {
  food: Fodmap;
};

const styles = {
  container: "flex justify-between items-center my-1",
};

const fodmapRating = (score?: number) => {
  let rating = "N/A";
  rating = score === 0 ? "Low" : rating;
  rating = score === 1 ? "Medium" : rating;
  rating = score === 2 ? "High" : rating;

  return rating;
};

const FoodItem: React.FC<FoodItemProps> = ({ food }) => {
  return (
    <div className="">
      <div className={styles.container}>
        <img src={carrot} className="max-w-[100px]" />
        <div>
          <p className="text-4xl">{food.name}</p>
          <p className="text-base">{food.category}</p>
          <p className="text-base">Max Quantity: {food.qty ?? "unspecified"}</p>
          <p className="text-2xl">{food.fodmap.toUpperCase()}</p>
        </div>
      </div>
      <h2>Details:</h2>
      <div className="flex justify-between">
        <div>
          <p>Oligos: {fodmapRating(food.details?.oligos)}</p>
        </div>
        <div>
          <p>Lactose: {fodmapRating(food.details?.lactose)}</p>
        </div>
        <div>
          <p>Fructose: {fodmapRating(food.details?.fructose)}</p>
        </div>
        <div>
          <p>Polyols: {fodmapRating(food.details?.polyols)}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
