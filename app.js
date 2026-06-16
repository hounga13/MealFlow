/**
 * MealFlow - Premium Meal Planner & Nutritional Tracker Logic
 * Senior Architect Implementation
 */

// --- Default Data: Presets representing different dietary patterns ---
const PRESET_RECIPES = [
  // 1. Balanced Diet (일반 균형식)
  {
    id: 'rec-bal-1',
    name: '훈제오리 가든 샐러드',
    type: 'balanced',
    calories: 450,
    carbs: 25,
    protein: 20,
    fat: 30,
    ingredients: '훈제오리 120g, 믹스 야채 80g, 오리엔탈 드레싱, 방울토마토 5개'
  },
  {
    id: 'rec-bal-2',
    name: '소고기 소고기 미역국 & 잡곡밥',
    type: 'balanced',
    calories: 520,
    carbs: 70,
    protein: 25,
    fat: 15,
    ingredients: '소고기 국거리 80g, 미역 15g, 잡곡밥 150g, 참기름, 간장'
  },
  {
    id: 'rec-bal-3',
    name: '매콤 닭갈비 덮밥',
    type: 'balanced',
    calories: 610,
    carbs: 85,
    protein: 35,
    fat: 14,
    ingredients: '닭다리살 150g, 양배추 50g, 양파 30g, 고추장 양념, 현미밥 150g'
  },

  // 2. Diet / Weight Loss (다이어트)
  {
    id: 'rec-diet-1',
    name: '수비드 닭가슴살 샐러드',
    type: 'diet',
    calories: 320,
    carbs: 15,
    protein: 35,
    fat: 8,
    ingredients: '닭가슴살 120g, 로메인 50g, 올리브유 1작은술, 아몬드 슬라이스 10g'
  },
  {
    id: 'rec-diet-2',
    name: '흰강낭콩 곤약밥 & 삼치구이',
    type: 'diet',
    calories: 380,
    carbs: 45,
    protein: 30,
    fat: 10,
    ingredients: '삼치 1토막, 곤약 잡곡밥 150g, 백김치, 구운 김 3장'
  },
  {
    id: 'rec-diet-3',
    name: '구운 양송이버섯 & 연어 스테이크',
    type: 'diet',
    calories: 420,
    carbs: 10,
    protein: 32,
    fat: 28,
    ingredients: '생연어 150g, 양송이버섯 4개, 아스파라거스 3줄기, 레몬즙'
  },

  // 3. Muscle Gain / Bulk up (고단백 벌크업)
  {
    id: 'rec-bulk-1',
    name: '소고기 채끝 스테이크 덮밥',
    type: 'bulk',
    calories: 780,
    carbs: 95,
    protein: 55,
    fat: 20,
    ingredients: '소고기 채끝살 200g, 흰쌀밥 200g, 양파 50g, 데리야끼 소스, 와사비'
  },
  {
    id: 'rec-bulk-2',
    name: '닭안심 토마토 파스타',
    type: 'bulk',
    calories: 690,
    carbs: 90,
    protein: 45,
    fat: 12,
    ingredients: '통밀 파스타면 100g, 닭안심살 150g, 토마토 소스 150g, 마늘 5알'
  },
  {
    id: 'rec-bulk-3',
    name: '고구마 에그 샌드위치 & 우유',
    type: 'bulk',
    calories: 620,
    carbs: 80,
    protein: 30,
    fat: 18,
    ingredients: '찐 고구마 150g, 식빵 2장, 삶은 계란 2개, 저지방 우유 200ml'
  },

  // 4. Keto / Low Carb High Fat (키토제닉 / 저탄고지)
  {
    id: 'rec-keto-1',
    name: '버터 갈릭 쉬림프 & 아보카도',
    type: 'keto',
    calories: 580,
    carbs: 6,
    protein: 24,
    fat: 52,
    ingredients: '자숙새우 10마리, 무염버터 30g, 다진마늘 1큰술, 아보카도 1개'
  },
  {
    id: 'rec-keto-2',
    name: '허브 삼겹살 구이 & 구운 마늘',
    type: 'keto',
    calories: 720,
    carbs: 4,
    protein: 28,
    fat: 68,
    ingredients: '삼겹살 200g, 아스파라거스 2개, 마늘 8알, 쌈채소'
  },
  {
    id: 'rec-keto-3',
    name: '베이컨 시저 샐러드',
    type: 'keto',
    calories: 490,
    carbs: 5,
    protein: 15,
    fat: 46,
    ingredients: '베이컨 3줄, 로메인 레터스 100g, 시저 드레싱 30g, 파마산 치즈가루'
  },

  // 5. Vegan (식물성 비건)
  {
    id: 'rec-vegan-1',
    name: '구운 두부 버섯 덮밥',
    type: 'vegan',
    calories: 410,
    carbs: 65,
    protein: 18,
    fat: 10,
    ingredients: '부침용 두부 150g, 느타리버섯 50g, 굴소스 대용 간장, 현미밥 130g'
  },
  {
    id: 'rec-vegan-2',
    name: '병아리콩 후무스 샐러드 랩',
    type: 'vegan',
    calories: 380,
    carbs: 55,
    protein: 14,
    fat: 12,
    ingredients: '또띠아 1장, 병아리콩 후무스 80g, 파프리카 30g, 적양배추 20g'
  },
  {
    id: 'rec-vegan-3',
    name: '템페 소금구이 & 아보카도 타코',
    type: 'vegan',
    calories: 460,
    carbs: 48,
    protein: 22,
    fat: 20,
    ingredients: '템페 100g, 타코 쉘 2개, 아보카도 과카몰리 50g, 고수 소량'
  }
];

// --- App State ---
let state = {
  targetCalories: 2000,
  dietType: 'balanced', // balanced, diet, bulk, keto, vegan
  meals: {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: []
  },
  customRecipes: [],
  customShoppingItems: [],
  checkedShoppingItems: [], // list of item names that are completed
  shoppingFilter: 'all' // all, pending, completed
};

// --- Initialization & Diagnostic Logging ---
document.addEventListener('DOMContentLoaded', () => {
  try {
    console.log('[MealFlow App] Initializing...');
    loadFromLocalStorage();
    calculateTargetMacros();
    renderAll();
    setupEventListeners();
    console.log('[MealFlow App] Initialization Complete.');
  } catch (error) {
    console.error('[MealFlow App] Failed to initialize correctly:', error);
  }
});

// --- State Management Helpers ---
function saveToLocalStorage() {
  try {
    localStorage.setItem('mealflow_state', JSON.stringify(state));
  } catch (error) {
    console.error('[MealFlow Storage] Error saving state:', error);
  }
}

function loadFromLocalStorage() {
  try {
    const rawData = localStorage.getItem('mealflow_state');
    if (rawData) {
      const parsed = JSON.parse(rawData);
      // Defensive checks and structural migrations
      state.targetCalories = Number(parsed.targetCalories) || 2000;
      state.dietType = parsed.dietType || 'balanced';
      state.meals = parsed.meals || { mon: [], tue: [], wed: [], thu: [], fri: [], sat: [], sun: [] };
      state.customRecipes = parsed.customRecipes || [];
      state.customShoppingItems = parsed.customShoppingItems || [];
      state.checkedShoppingItems = parsed.checkedShoppingItems || [];
      state.shoppingFilter = parsed.shoppingFilter || 'all';
      console.log('[MealFlow Storage] State loaded successfully.');
    } else {
      console.log('[MealFlow Storage] No saved state found. Using default blank state.');
      injectInitialMockData();
    }
  } catch (error) {
    console.error('[MealFlow Storage] Error reading state from storage, falling back to defaults:', error);
    injectInitialMockData();
  }
}

// Injects default data so the user isn't greeted by an empty screen
function injectInitialMockData() {
  try {
    state.targetCalories = 2000;
    state.dietType = 'balanced';
    
    // Distribute a few preset recipes across the week
    state.meals.mon = [
      { id: 'mock-1', name: '수비드 닭가슴살 샐러드', time: 'breakfast', calories: 320, carbs: 15, protein: 35, fat: 8, ingredients: '닭가슴살 120g, 로메인 50g, 아몬드' },
      { id: 'mock-2', name: '매콤 닭갈비 덮밥', time: 'lunch', calories: 610, carbs: 85, protein: 35, fat: 14, ingredients: '닭다리살 150g, 양배추, 현미밥 150g' }
    ];
    state.meals.wed = [
      { id: 'mock-3', name: '소고기 채끝 스테이크 덮밥', time: 'lunch', calories: 780, carbs: 95, protein: 55, fat: 20, ingredients: '소고기 채끝살 200g, 흰쌀밥 200g, 와사비' }
    ];
    state.meals.fri = [
      { id: 'mock-4', name: '버터 갈릭 쉬림프 & 아보카도', time: 'dinner', calories: 580, carbs: 6, protein: 24, fat: 52, ingredients: '자숙새우 10마리, 무염버터 30g, 아보카도' }
    ];
    
    state.customShoppingItems = ['요거트 1팩', '프로틴 쉐이크'];
    state.shoppingFilter = 'all';
    saveToLocalStorage();
  } catch (e) {
    console.error('[MealFlow Mock] Injecting mock data failed:', e);
  }
}

// --- Formula-based Target Macro Calculations ---
function calculateTargetMacros() {
  const cal = state.targetCalories;
  let carbPct = 0.5, proteinPct = 0.2, fatPct = 0.3;

  switch (state.dietType) {
    case 'diet':
      carbPct = 0.4; proteinPct = 0.4; fatPct = 0.2;
      break;
    case 'bulk':
      carbPct = 0.55; proteinPct = 0.25; fatPct = 0.20;
      break;
    case 'keto':
      carbPct = 0.05; proteinPct = 0.25; fatPct = 0.70;
      break;
    case 'vegan':
      carbPct = 0.60; proteinPct = 0.20; fatPct = 0.20;
      break;
    case 'balanced':
    default:
      carbPct = 0.50; proteinPct = 0.20; fatPct = 0.30;
      break;
  }

  // Calculate target grams: Carbs = 4 kcal/g, Protein = 4 kcal/g, Fat = 9 kcal/g
  const targetCarbs = Math.round((cal * carbPct) / 4);
  const targetProtein = Math.round((cal * proteinPct) / 4);
  const targetFat = Math.round((cal * fatPct) / 9);

  // Update UI inputs
  const cVal = document.getElementById('target-carbs-val');
  const pVal = document.getElementById('target-protein-val');
  const fVal = document.getElementById('target-fat-val');
  if (cVal) cVal.textContent = targetCarbs;
  if (pVal) pVal.textContent = targetProtein;
  if (fVal) fVal.textContent = targetFat;

  return { targetCarbs, targetProtein, targetFat };
}

// --- Aggregated Nutritional Tracking ---
function getWeeklyAverages() {
  let totalCal = 0;
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let activeDays = 0;

  for (const day in state.meals) {
    const dayMeals = state.meals[day];
    if (dayMeals.length > 0) {
      activeDays++;
      dayMeals.forEach(m => {
        totalCal += Number(m.calories) || 0;
        totalCarbs += Number(m.carbs) || 0;
        totalProtein += Number(m.protein) || 0;
        totalFat += Number(m.fat) || 0;
      });
    }
  }

  // If no meals are planned, default division by 1 to prevent division by zero
  const divisor = activeDays || 1;
  return {
    avgCal: Math.round(totalCal / divisor),
    avgCarbs: Math.round(totalCarbs / divisor),
    avgProtein: Math.round(totalProtein / divisor),
    avgFat: Math.round(totalFat / divisor)
  };
}

// --- Main Render function coordinating all tabs ---
function renderAll() {
  renderPlanner();
  renderNutritionProgress();
  renderRecipes();
  renderShoppingLists();
  
  // Update Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 1. Render Planner Board (Weekly Grid)
function renderPlanner() {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  
  days.forEach(day => {
    const listEl = document.getElementById(`meals-${day}`);
    const summaryEl = document.getElementById(`summary-${day}`);
    if (!listEl) return;

    listEl.innerHTML = '';
    const dayMeals = state.meals[day] || [];

    let dayCal = 0;
    let dayCarbs = 0;
    let dayProtein = 0;
    let dayFat = 0;

    dayMeals.forEach(meal => {
      dayCal += Number(meal.calories) || 0;
      dayCarbs += Number(meal.carbs) || 0;
      dayProtein += Number(meal.protein) || 0;
      dayFat += Number(meal.fat) || 0;

      const card = document.createElement('div');
      card.className = 'meal-card-item';
      card.dataset.id = meal.id;
      card.dataset.day = day;
      
      let timeText = '기타';
      if (meal.time === 'breakfast') timeText = '아침';
      if (meal.time === 'lunch') timeText = '점심';
      if (meal.time === 'dinner') timeText = '저녁';
      if (meal.time === 'snack') timeText = '간식';

      card.innerHTML = `
        <span class="meal-time-badge ${meal.time}">${timeText}</span>
        <h4>${escapeHTML(meal.name)}</h4>
        <div class="meal-card-info">
          <span>${meal.calories} kcal</span>
          <span>탄 ${meal.carbs}g</span>
          <span>단 ${meal.protein}g</span>
          <span>지 ${meal.fat}g</span>
        </div>
      `;

      card.addEventListener('click', () => openMealModalForEdit(day, meal.id));
      listEl.appendChild(card);
    });

    if (summaryEl) {
      summaryEl.innerHTML = '';
      
      const textSpan = document.createElement('span');
      textSpan.textContent = `${dayCal} kcal | 탄 ${dayCarbs}g 단 ${dayProtein}g 지 ${dayFat}g`;
      summaryEl.appendChild(textSpan);

      const pct = Math.min((dayCal / state.targetCalories) * 100, 100);
      let colorClass = 'warning';
      if (dayCal > state.targetCalories) {
        colorClass = 'danger';
      } else if (pct >= 70) {
        colorClass = 'normal';
      }

      const barWrapper = document.createElement('div');
      barWrapper.className = 'day-calorie-progress-wrapper';
      barWrapper.innerHTML = `
        <div class="day-calorie-bar-bg" title="목표량 대비 ${Math.round((dayCal / state.targetCalories) * 100)}%">
          <div class="day-calorie-bar ${colorClass}" style="width: ${pct}%"></div>
        </div>
      `;
      summaryEl.appendChild(barWrapper);
    }
  });
}

// 2. Render Progress Bars & Aggregations
function renderNutritionProgress() {
  const averages = getWeeklyAverages();
  const targets = calculateTargetMacros();

  // Targets
  const limitCalories = state.targetCalories;
  
  // DOM Elements
  const currCalEl = document.getElementById('current-calories');
  const limitCalEl = document.getElementById('limit-calories');
  const barCalEl = document.getElementById('bar-calories');

  const currCarbsEl = document.getElementById('current-carbs');
  const limitCarbsEl = document.getElementById('limit-carbs');
  const barCarbsEl = document.getElementById('bar-carbs');

  const currProteinEl = document.getElementById('current-protein');
  const limitProteinEl = document.getElementById('limit-protein');
  const barProteinEl = document.getElementById('bar-protein');

  const currFatEl = document.getElementById('current-fat');
  const limitFatEl = document.getElementById('limit-fat');
  const barFatEl = document.getElementById('bar-fat');

  // Fill in numbers
  if (currCalEl) currCalEl.textContent = averages.avgCal;
  if (limitCalEl) limitCalEl.textContent = limitCalories;
  
  if (currCarbsEl) currCarbsEl.textContent = averages.avgCarbs;
  if (limitCarbsEl) limitCarbsEl.textContent = targets.targetCarbs;

  if (currProteinEl) currProteinEl.textContent = averages.avgProtein;
  if (limitProteinEl) limitProteinEl.textContent = targets.targetProtein;

  if (currFatEl) currFatEl.textContent = averages.avgFat;
  if (limitFatEl) limitFatEl.textContent = targets.targetFat;

  // Calculate percentages and limit to max 100%
  const calPct = Math.min((averages.avgCal / limitCalories) * 100, 100);
  const carbsPct = Math.min((averages.avgCarbs / targets.targetCarbs) * 100, 100);
  const proteinPct = Math.min((averages.avgProtein / targets.targetProtein) * 100, 100);
  const fatPct = Math.min((averages.avgFat / targets.targetFat) * 100, 100);

  // Apply widths to progress bars
  if (barCalEl) barCalEl.style.width = `${calPct}%`;
  if (barCarbsEl) barCarbsEl.style.width = `${carbsPct}%`;
  if (barProteinEl) barProteinEl.style.width = `${proteinPct}%`;
  if (barFatEl) barFatEl.style.width = `${fatPct}%`;
}

// 3. Render Recipe Book
function renderRecipes() {
  const container = document.getElementById('recipe-container');
  if (!container) return;

  container.innerHTML = '';

  const searchVal = (document.getElementById('recipe-search')?.value || '').toLowerCase();
  const activeFilterBtn = document.querySelector('.filter-btn.active');
  const activeType = activeFilterBtn ? activeFilterBtn.dataset.type : 'all';

  // Combine Presets and Custom recipes
  const allRecipes = [...PRESET_RECIPES, ...state.customRecipes];

  const filtered = allRecipes.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchVal) || 
                          r.ingredients.toLowerCase().includes(searchVal);
    const matchesType = (activeType === 'all') || (r.type === activeType);
    return matchesSearch && matchesType;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="card" style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 3rem;">
        <i data-lucide="info" style="width: 48px; height: 48px; margin: 0 auto 1rem auto; display: block; color: var(--text-muted);"></i>
        <p>조건에 맞는 레시피가 없습니다. 나만의 레시피를 추가해 보세요!</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  filtered.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card card';
    
    let typeName = '일반식';
    if (recipe.type === 'diet') typeName = '다이어트';
    if (recipe.type === 'bulk') typeName = '벌크업';
    if (recipe.type === 'keto') typeName = '키토제닉';
    if (recipe.type === 'vegan') typeName = '비건';

    card.innerHTML = `
      <div>
        <div class="card-header" style="margin-bottom: 0.5rem;">
          <span class="recipe-badge ${recipe.type}">${typeName}</span>
        </div>
        <h3 class="recipe-card-title">${escapeHTML(recipe.name)}</h3>
        <div class="recipe-macros">
          <div class="recipe-macro-item">
            <span>칼로리</span>
            <strong>${recipe.calories}</strong>
          </div>
          <div class="recipe-macro-item">
            <span>탄수</span>
            <strong>${recipe.carbs}g</strong>
          </div>
          <div class="recipe-macro-item">
            <span>단백</span>
            <strong>${recipe.protein}g</strong>
          </div>
          <div class="recipe-macro-item">
            <span>지방</span>
            <strong>${recipe.fat}g</strong>
          </div>
        </div>
        <p class="recipe-ingredients-preview">${escapeHTML(recipe.ingredients)}</p>
      </div>
      <div class="recipe-actions">
        <select class="action-btn select-day-to-add" style="flex-grow: 1; padding: 0.5rem;">
          <option value="">식단표에 추가...</option>
          <option value="mon">월요일 추가</option>
          <option value="tue">화요일 추가</option>
          <option value="wed">수요일 추가</option>
          <option value="thu">목요일 추가</option>
          <option value="fri">금요일 추가</option>
          <option value="sat">토요일 추가</option>
          <option value="sun">일요일 추가</option>
        </select>
      </div>
    `;

    // Hook up selective addition to calendar
    const selectEl = card.querySelector('.select-day-to-add');
    selectEl.addEventListener('change', (e) => {
      const selectedDay = e.target.value;
      if (!selectedDay) return;
      
      const newMeal = {
        id: 'meal-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        name: recipe.name,
        time: 'lunch', // Default meal category
        calories: recipe.calories,
        carbs: recipe.carbs,
        protein: recipe.protein,
        fat: recipe.fat,
        ingredients: recipe.ingredients
      };

      state.meals[selectedDay].push(newMeal);
      saveToLocalStorage();
      renderAll();
      
      // Reset select dropdown index
      selectEl.selectedIndex = 0;
      showToast(`${recipe.name}이 ${translateDay(selectedDay)} 식단표에 추가되었습니다.`);
      console.log(`[MealFlow Planner] Added ${recipe.name} to ${selectedDay}`);
    });

    container.appendChild(card);
  });
}

// 4. Render Auto-parsed Ingredients & Custom Items Shopping Lists
function renderShoppingLists() {
  const autoContainer = document.getElementById('auto-shopping-list');
  const customContainer = document.getElementById('custom-shopping-list');
  
  if (!autoContainer || !customContainer) return;

  // Clear
  autoContainer.innerHTML = '';
  customContainer.innerHTML = '';

  // --- Step 4a: Parse Ingredients from Planner ---
  // 식재료 텍스트를 파싱하여 동일 재료(단위 동일)인 경우 중량/수량을 스마트하게 합산
  const autoIngredientsMap = {};
  const unitRegex = /^(.+?)\s*(\d+(?:\.\d+)?)\s*(g|개|ml|알|토막|팩|큰술|작은술|봉지|줄기|컵|장|병|인분)$/i;

  for (const day in state.meals) {
    state.meals[day].forEach(meal => {
      if (meal.ingredients) {
        const items = meal.ingredients.split(',')
          .map(item => item.trim())
          .filter(item => item.length > 0);
        
        items.forEach(item => {
          const match = item.match(unitRegex);
          if (match) {
            const rawName = match[1].trim();
            const amount = parseFloat(match[2]);
            const unit = match[3].trim();
            const cleanNameKey = rawName.toLowerCase();
            const mapKey = `${cleanNameKey}_${unit.toLowerCase()}`;

            if (autoIngredientsMap[mapKey]) {
              autoIngredientsMap[mapKey].amount += amount;
            } else {
              autoIngredientsMap[mapKey] = {
                name: rawName,
                amount: amount,
                unit: unit,
                cleanKey: cleanNameKey
              };
            }
          } else {
            const cleanNameKey = item.toLowerCase();
            const mapKey = `${cleanNameKey}_no_unit`;
            if (!autoIngredientsMap[mapKey]) {
              autoIngredientsMap[mapKey] = {
                name: item,
                amount: null,
                unit: null,
                cleanKey: cleanNameKey
              };
            }
          }
        });
      }
    });
  }

  // 맵을 배열로 변환
  const autoIngredients = Object.values(autoIngredientsMap).map(x => {
    let display = x.name;
    if (x.amount !== null) {
      display = `${x.name} ${x.amount}${x.unit}`;
    }
    return {
      clean: x.cleanKey,
      display: display
    };
  });

  // Apply status filters to auto ingredients
  let filteredAuto = autoIngredients;
  if (state.shoppingFilter === 'pending') {
    filteredAuto = autoIngredients.filter(item => !state.checkedShoppingItems.includes(item.clean));
  } else if (state.shoppingFilter === 'completed') {
    filteredAuto = autoIngredients.filter(item => state.checkedShoppingItems.includes(item.clean));
  }

  // Render auto items
  if (filteredAuto.length === 0) {
    let emptyMsg = '플래너에 식재료가 등록된 식사를 추가하면 자동으로 쇼핑 목록이 채워집니다.';
    if (state.shoppingFilter === 'pending') emptyMsg = '살 품목이 없습니다! 장보기가 완료되었습니다. 🎉';
    if (state.shoppingFilter === 'completed') emptyMsg = '완료(구매) 처리된 품목이 없습니다.';
    autoContainer.innerHTML = `
      <li style="color: var(--text-muted); text-align: center; padding: 1.5rem 0; font-size: 0.9rem;">
        ${emptyMsg}
      </li>
    `;
  } else {
    filteredAuto.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'shopping-item';
      
      const uniqueId = `auto-chk-${index}`;
      const isChecked = state.checkedShoppingItems.includes(item.clean);

      li.innerHTML = `
        <input type="checkbox" id="${uniqueId}" ${isChecked ? 'checked' : ''}>
        <span>${escapeHTML(item.display)}</span>
      `;

      // Checkbox event
      const chk = li.querySelector('input[type="checkbox"]');
      chk.addEventListener('change', () => {
        if (chk.checked) {
          if (!state.checkedShoppingItems.includes(item.clean)) {
            state.checkedShoppingItems.push(item.clean);
          }
        } else {
          state.checkedShoppingItems = state.checkedShoppingItems.filter(x => x !== item.clean);
        }
        saveToLocalStorage();
        updateShoppingBadge();
        // Dynamic re-render if filter is active
        if (state.shoppingFilter !== 'all') {
          setTimeout(() => renderShoppingLists(), 200);
        }
      });

      autoContainer.appendChild(li);
    });
  }

  // Apply status filters to custom items
  const customItemsMapped = state.customShoppingItems.map((item, index) => ({ item, originalIndex: index }));
  let filteredCustom = customItemsMapped;
  if (state.shoppingFilter === 'pending') {
    filteredCustom = customItemsMapped.filter(x => !state.checkedShoppingItems.includes(`custom-${x.item}`));
  } else if (state.shoppingFilter === 'completed') {
    filteredCustom = customItemsMapped.filter(x => state.checkedShoppingItems.includes(`custom-${x.item}`));
  }

  // --- Step 4b: Render Custom Shopping Items ---
  if (filteredCustom.length === 0) {
    let emptyMsg = '추가된 커스텀 아이템이 없습니다.';
    if (state.shoppingFilter === 'pending') emptyMsg = '살 커스텀 아이템이 없습니다.';
    if (state.shoppingFilter === 'completed') emptyMsg = '구매 완료된 커스텀 아이템이 없습니다.';
    customContainer.innerHTML = `
      <li style="color: var(--text-muted); text-align: center; padding: 1rem 0; font-size: 0.85rem;">
        ${emptyMsg}
      </li>
    `;
  } else {
    filteredCustom.forEach(({ item, originalIndex }) => {
      const li = document.createElement('li');
      li.className = 'shopping-item';
      
      const uniqueId = `custom-chk-${originalIndex}`;
      const isChecked = state.checkedShoppingItems.includes(`custom-${item}`);

      li.innerHTML = `
        <input type="checkbox" id="${uniqueId}" ${isChecked ? 'checked' : ''}>
        <span>${escapeHTML(item)}</span>
        <button class="delete-item-btn" title="삭제"><i data-lucide="trash-2"></i></button>
      `;

      // Checkbox event
      const chk = li.querySelector('input[type="checkbox"]');
      chk.addEventListener('change', () => {
        const itemKey = `custom-${item}`;
        if (chk.checked) {
          if (!state.checkedShoppingItems.includes(itemKey)) {
            state.checkedShoppingItems.push(itemKey);
          }
        } else {
          state.checkedShoppingItems = state.checkedShoppingItems.filter(x => x !== itemKey);
        }
        saveToLocalStorage();
        updateShoppingBadge();
        // Dynamic re-render if filter is active
        if (state.shoppingFilter !== 'all') {
          setTimeout(() => renderShoppingLists(), 200);
        }
      });

      // Delete button
      const delBtn = li.querySelector('.delete-item-btn');
      delBtn.addEventListener('click', () => {
        state.customShoppingItems.splice(originalIndex, 1);
        state.checkedShoppingItems = state.checkedShoppingItems.filter(x => x !== `custom-${item}`);
        saveToLocalStorage();
        renderShoppingLists();
      });

      customContainer.appendChild(li);
    });
  }

  updateShoppingBadge();
}

// Update Badge count
function updateShoppingBadge() {
  const badge = document.getElementById('shopping-badge');
  if (!badge) return;

  const totalAuto = document.querySelectorAll('#auto-shopping-list .shopping-item input[type="checkbox"]').length;
  const checkedAuto = document.querySelectorAll('#auto-shopping-list .shopping-item input[type="checkbox"]:checked').length;
  
  const totalCustom = state.customShoppingItems.length;
  const checkedCustom = document.querySelectorAll('#custom-shopping-list .shopping-item input[type="checkbox"]:checked').length;
  
  const remaining = (totalAuto + totalCustom) - (checkedAuto + checkedCustom);
  badge.textContent = Math.max(remaining, 0);
}

// --- Event Handling and Forms ---
function setupEventListeners() {
  // 1. Tab switches
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetTabId = btn.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });

      const activeTab = document.getElementById(targetTabId);
      if (activeTab) activeTab.classList.add('active');

      // Update Page Title
      const pageTitle = document.getElementById('page-title');
      if (pageTitle) {
        if (targetTabId === 'tab-dashboard') pageTitle.textContent = '주간 식단 플래너';
        if (targetTabId === 'tab-recipes') pageTitle.textContent = '레시피 보관함';
        if (targetTabId === 'tab-shopping') pageTitle.textContent = '장보기 리스트';
      }
    });
  });

  // 2. Goal settings listeners
  const targetCalInput = document.getElementById('target-calories');
  const dietSelector = document.getElementById('diet-type-selector');

  if (targetCalInput) {
    // Sync UI value
    targetCalInput.value = state.targetCalories;
    targetCalInput.addEventListener('change', (e) => {
      let val = Number(e.target.value);
      if (isNaN(val) || val < 500) val = 500;
      if (val > 20000) val = 20000;
      state.targetCalories = val;
      saveToLocalStorage();
      renderNutritionProgress();
      calculateTargetMacros();
      showToast('목표 칼로리 및 권장 영양소가 변경되었습니다.', 'info');
    });
  }

  if (dietSelector) {
    dietSelector.value = state.dietType;
    dietSelector.addEventListener('change', (e) => {
      state.dietType = e.target.value;
      saveToLocalStorage();
      renderNutritionProgress();
      calculateTargetMacros();
      showToast('식단 모드가 갱신되었습니다.', 'info');
    });
  }

  // 3. Modals dialogs triggers
  const mealModal = document.getElementById('meal-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');
  const addMealBtns = document.querySelectorAll('.add-meal-btn');

  // Open modal for new meal addition
  addMealBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const day = btn.dataset.day;
      openMealModalForAdd(day);
    });
  });

  if (btnCloseModal && mealModal) {
    btnCloseModal.addEventListener('click', () => mealModal.close());
  }

  // Form submits - Meal Save
  const mealForm = document.getElementById('meal-form');
  if (mealForm && mealModal) {
    mealForm.addEventListener('submit', (e) => {
      // Form default is action-less submittion inside dialog, handles save manually
      const day = document.getElementById('meal-day').value;
      const mealId = document.getElementById('meal-id').value;

      const newMeal = {
        id: mealId || 'meal-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
        name: document.getElementById('meal-name').value,
        time: document.getElementById('meal-time').value,
        calories: Number(document.getElementById('meal-calories').value) || 0,
        carbs: Number(document.getElementById('meal-carbs').value) || 0,
        protein: Number(document.getElementById('meal-protein').value) || 0,
        fat: Number(document.getElementById('meal-fat').value) || 0,
        ingredients: document.getElementById('meal-ingredients').value
      };

      if (mealId) {
        // Edit flow
        const idx = state.meals[day].findIndex(m => m.id === mealId);
        if (idx !== -1) {
          state.meals[day][idx] = newMeal;
        }
      } else {
        // Add flow
        state.meals[day].push(newMeal);
      }

      saveToLocalStorage();
      renderAll();
      showToast('식사 계획이 저장되었습니다.');
      mealModal.close();
    });
  }

  // Delete Meal Button
  const btnDeleteMeal = document.getElementById('btn-delete-meal');
  if (btnDeleteMeal && mealModal) {
    btnDeleteMeal.addEventListener('click', () => {
      const day = document.getElementById('meal-day').value;
      const mealId = document.getElementById('meal-id').value;
      if (day && mealId) {
        state.meals[day] = state.meals[day].filter(m => m.id !== mealId);
        saveToLocalStorage();
        renderAll();
        showToast('식사 계획이 삭제되었습니다.', 'danger');
        mealModal.close();
      }
    });
  }

  // 4. Recipes Actions
  const btnCreateRecipe = document.getElementById('btn-create-recipe');
  const recipeModal = document.getElementById('recipe-modal');
  const btnCloseRecipeModal = document.getElementById('btn-close-recipe-modal');
  const recipeForm = document.getElementById('recipe-form');

  if (btnCreateRecipe && recipeModal) {
    btnCreateRecipe.addEventListener('click', () => recipeModal.showModal());
  }
  if (btnCloseRecipeModal && recipeModal) {
    btnCloseRecipeModal.addEventListener('click', () => recipeModal.close());
  }

  if (recipeForm && recipeModal) {
    recipeForm.addEventListener('submit', () => {
      const newRecipe = {
        id: 'rec-' + Date.now(),
        name: document.getElementById('recipe-name').value,
        type: document.getElementById('recipe-type').value,
        calories: Number(document.getElementById('recipe-calories').value) || 0,
        carbs: Number(document.getElementById('recipe-carbs').value) || 0,
        protein: Number(document.getElementById('recipe-protein').value) || 0,
        fat: Number(document.getElementById('recipe-fat').value) || 0,
        ingredients: document.getElementById('recipe-ingredients').value
      };

      state.customRecipes.push(newRecipe);
      saveToLocalStorage();
      renderRecipes();
      showToast(`'${newRecipe.name}' 레시피를 보관함에 추가했습니다.`);
      recipeModal.close();
      recipeForm.reset();
    });
  }

  // Recipe search & filter button updates
  const recipeSearchInput = document.getElementById('recipe-search');
  if (recipeSearchInput) {
    recipeSearchInput.addEventListener('input', () => {
      renderRecipes();
    });
  }

  const recipeFilterBtns = document.querySelectorAll('.filter-btn');
  recipeFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      recipeFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRecipes();
    });
  });

  // 5. Shopping Actions
  const customShoppingForm = document.getElementById('add-shopping-form');
  if (customShoppingForm) {
    customShoppingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('shopping-item-name');
      const val = input.value.trim();
      if (val) {
        state.customShoppingItems.push(val);
        saveToLocalStorage();
        renderShoppingLists();
        showToast(`'${val}'을 장보기 리스트에 추가했습니다.`);
        input.value = '';
      }
    });
  }

  const btnClearCompleted = document.getElementById('btn-clear-completed-shopping');
  if (btnClearCompleted) {
    btnClearCompleted.addEventListener('click', () => {
      const checkedCustom = [];
      state.customShoppingItems = state.customShoppingItems.filter(item => {
        const itemKey = `custom-${item}`;
        if (state.checkedShoppingItems.includes(itemKey)) {
          checkedCustom.push(itemKey);
          return false;
        }
        return true;
      });

      state.checkedShoppingItems = state.checkedShoppingItems.filter(key => {
        if (key.startsWith('custom-')) {
          return !checkedCustom.includes(key);
        }
        return false; 
      });

      saveToLocalStorage();
      renderShoppingLists();
      showToast('완료된 장보기 품목을 정리했습니다.', 'info');
      console.log('[MealFlow Shopping] Cleaned up completed shopping list items.');
    });
  }

  // 6. Reset Data Action
  const btnReset = document.getElementById('btn-reset-data');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('모든 데이터가 초기화되고 초기 예시 데이터로 대체됩니다. 진행하시겠습니까?')) {
        localStorage.removeItem('mealflow_state');
        state = {
          targetCalories: 2000,
          dietType: 'balanced',
          meals: { mon: [], tue: [], wed: [], thu: [], fri: [], sat: [], sun: [] },
          customRecipes: [],
          customShoppingItems: [],
          checkedShoppingItems: [],
          shoppingFilter: 'all'
        };
        injectInitialMockData();
        loadFromLocalStorage();
        calculateTargetMacros();
        renderAll();
        showToast('모든 데이터가 초기화되었습니다.', 'warning');
        console.log('[MealFlow App] Reset database.');
      }
    });
  }

  // 7. Print Action
  const btnPrint = document.getElementById('btn-print-meals');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      showToast('식단표 인쇄 창을 엽니다.', 'info');
      window.print();
    });
  }

  // 8. Backup & Restore Actions
  const btnExport = document.getElementById('btn-export-data');
  const btnImport = document.getElementById('btn-import-data');
  const importFileInput = document.getElementById('import-file-input');

  if (btnExport) {
    btnExport.addEventListener('click', () => {
      try {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const downloadAnchor = document.createElement('a');
        const dateStr = new Date().toISOString().slice(0, 10);
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `mealflow-backup-${dateStr}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast('식단 백업 파일을 내보냈습니다.');
        console.log('[MealFlow App] Backup file exported successfully.');
      } catch (error) {
        console.error('[MealFlow App] Failed to export backup:', error);
        showToast('백업 파일 내보내기에 실패했습니다.', 'danger');
      }
    });
  }

  if (btnImport && importFileInput) {
    btnImport.addEventListener('click', () => {
      importFileInput.click();
    });

    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed && typeof parsed === 'object' && parsed.meals && parsed.targetCalories) {
            state.targetCalories = Number(parsed.targetCalories) || 2000;
            state.dietType = parsed.dietType || 'balanced';
            state.meals = parsed.meals;
            state.customRecipes = parsed.customRecipes || [];
            state.customShoppingItems = parsed.customShoppingItems || [];
            state.checkedShoppingItems = parsed.checkedShoppingItems || [];
            state.shoppingFilter = parsed.shoppingFilter || 'all';

            saveToLocalStorage();
            calculateTargetMacros();
            renderAll();
            
            const targetCalInput = document.getElementById('target-calories');
            const dietSelector = document.getElementById('diet-type-selector');
            if (targetCalInput) targetCalInput.value = state.targetCalories;
            if (dietSelector) dietSelector.value = state.dietType;

            showToast('백업 파일로부터 식단 데이터를 완벽히 복원했습니다!', 'success');
            console.log('[MealFlow App] Backup file imported successfully.');
          } else {
            showToast('올바른 MealFlow 백업 파일 형식이 아닙니다.', 'danger');
          }
        } catch (err) {
          console.error('[MealFlow App] Failed to parse backup file:', err);
          showToast('파일을 읽는 도중 오류가 발생했습니다.', 'danger');
        }
        importFileInput.value = '';
      };
      reader.readAsText(file);
    });
  }

  // 9. Shopping List Filters
  const shoppingFilterBtns = document.querySelectorAll('.shopping-filter-btn');
  shoppingFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      shoppingFilterBtns.forEach(b => {
        b.classList.remove('active');
        b.style.color = 'var(--text-secondary)';
      });
      btn.classList.add('active');
      btn.style.color = '#fff';

      state.shoppingFilter = btn.dataset.filter;
      saveToLocalStorage();
      renderShoppingLists();
      
      let filterText = '전체 품목';
      if (state.shoppingFilter === 'pending') filterText = '구매할 품목';
      if (state.shoppingFilter === 'completed') filterText = '구매 완료 품목';
      showToast(`장보기 목록 필터: ${filterText} 보기`, 'info');
    });
  });
}

// Open Dialog modal to add new meals
function openMealModalForAdd(day) {
  const modal = document.getElementById('meal-modal');
  const title = document.getElementById('modal-title');
  const form = document.getElementById('meal-form');
  const deleteBtn = document.getElementById('btn-delete-meal');

  if (!modal || !form) return;

  // Reset fields
  form.reset();
  document.getElementById('meal-id').value = '';
  document.getElementById('meal-day').value = day;
  
  if (title) title.textContent = `${translateDay(day)} 식사 추가`;
  if (deleteBtn) deleteBtn.style.display = 'none';

  modal.showModal();
}

// Open Dialog modal to edit/delete existing meals
function openMealModalForEdit(day, mealId) {
  const modal = document.getElementById('meal-modal');
  const title = document.getElementById('modal-title');
  const deleteBtn = document.getElementById('btn-delete-meal');

  if (!modal) return;

  const meal = state.meals[day].find(m => m.id === mealId);
  if (!meal) return;

  document.getElementById('meal-id').value = meal.id;
  document.getElementById('meal-day').value = day;
  document.getElementById('meal-name').value = meal.name;
  document.getElementById('meal-time').value = meal.time;
  document.getElementById('meal-calories').value = meal.calories;
  document.getElementById('meal-carbs').value = meal.carbs;
  document.getElementById('meal-protein').value = meal.protein;
  document.getElementById('meal-fat').value = meal.fat;
  document.getElementById('meal-ingredients').value = meal.ingredients || '';

  if (title) title.textContent = `${translateDay(day)} 식사 편집`;
  if (deleteBtn) deleteBtn.style.display = 'inline-flex';

  modal.showModal();
}

// Helper to localize day strings
function translateDay(day) {
  const map = {
    mon: '월요일',
    tue: '화요일',
    wed: '수요일',
    thu: '목요일',
    fri: '금요일',
    sat: '토요일',
    sun: '일요일'
  };
  return map[day] || day;
}

// Helper to escape HTML tags to prevent XSS
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Premium Toast Notification Helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconName = 'check-circle';
  if (type === 'info') iconName = 'info';
  if (type === 'warning') iconName = 'alert-triangle';
  if (type === 'danger') iconName = 'alert-octagon';

  toast.innerHTML = `
    <div class="toast-icon">
      <i data-lucide="${iconName}"></i>
    </div>
    <div class="toast-message">${escapeHTML(message)}</div>
  `;

  container.appendChild(toast);
  
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Auto remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}
