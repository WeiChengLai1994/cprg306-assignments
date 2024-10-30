"use client";
import { useState, useEffect } from "react";

// 定義 API 請求函數
const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();

        // 檢查 meals 是否存在
        if (!data.meals) {
            return []; // 如果沒有 meals，返回空陣列
        }
        return data.meals; // 返回包含該 ingredient 的餐點
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return []; // 錯誤時返回空陣列
    }
};

// 定義 MealComponent
const MealComponent = ({ ingredient }) => {
    const [meals, setMeals] = useState([]); // 定義 meals 狀態

    // 使用 useEffect Hook
    useEffect(() => {
        const loadMeals = async () => {
            const mealIdeas = await fetchMealIdeas(ingredient); // 獲取餐點
            setMeals(mealIdeas); // 更新 meals 狀態
        };
        loadMeals(); // 呼叫 loadMeals 函數
    }, [ingredient]); // 依賴 ingredient，當其改變時重新加載

    return (
        <div>
            <h1 style ={{
                fontSize:'1.5rem',
                fontFamily:'Arial,sans-serif',
                backgroundColor:'lightblue',
                color:'black',
                padding:'10px',
                borderRadius:'10px',
                textAlign:'center',
            }} >Meal Ideas</h1> {/* 標題 */}
            <ul>
                {meals.length > 0 ? ( // 直接檢查 meals 的長度
                    meals.map((meal) => ( // 渲染每個餐點
                        <li key={meal.idMeal}>
                            <h2>{meal.strMeal}</h2> {/* 顯示餐點名稱 */}
                            {meal.strMealThumb && <img src={meal.strMealThumb} alt={meal.strMeal} style={{width:'50%', height:'auto'}}/>} {/* 顯示餐點圖片 */}
                        </li>
                    ))
                ) : (
                    <p>No meals found with that ingredient</p> // 無餐點時顯示提示
                )}
            </ul>
        </div>
    );
};

export default MealComponent;
