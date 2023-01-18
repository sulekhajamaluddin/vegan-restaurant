export default function NutritionTableHeader({ calories }) {
  return (
    <thead>
      <tr>
        <td className="wide">Amount Per Serving</td>
        <td></td>
      </tr>
      <tr>
        <td className="wide">Calories:{calories}</td>
        <td></td>
      </tr>
      <tr>
        <td colSpan={2} className="right">
          {" "}
          % Daily Value*
        </td>
      </tr>
    </thead>
  );
}
