export default function NutritionTableBody({ nutrition }) {
  const nutritionList = nutrition.map((item) => {
    return (
      <tr key={item.id}>
        <td className="wide">
          {item.name}:{item.value}
        </td>
        <td className="right">{item.dailyValue}</td>
      </tr>
    );
  });

  return (
    <tbody>
      {nutritionList}
      <tr>
        <td colSpan={2} className="wide">
          *Percent Daily Values are based on a 2000 calorie diet. Your daily
          value may differ depending on your calorie needs
        </td>
      </tr>
    </tbody>
  );
}
