const fruits = [
    {
      fruitId: 1,
      fruitName: 'Apel',
      fruitType: 'IMPORT',
      stock: 10
    },
    {
      fruitId: 2,
      fruitName: 'Kurma',
      fruitType: 'IMPORT',
      stock: 20
    },
    {
      fruitId: 3,
      fruitName: 'apel',
      fruitType: 'IMPORT',
      stock: 50
    },
    {
      fruitId: 4,
      fruitName: 'Manggis',
      fruitType: 'LOCAL',
      stock: 100
    },
    {
      fruitId: 5,
      fruitName: 'Jeruk Bali',
      fruitType: 'LOCAL',
      stock: 10
    },
    {
      fruitId: 5,
      fruitName: 'KURMA',
      fruitType: 'IMPORT',
      stock: 20
    },
    {
      fruitId: 5,
      fruitName: 'Salak',
      fruitType: 'LOCAL',
      stock: 150
    }
  ];
  
  function separateFruitsByType(fruits) {
    const fruitContainers = {};
  
    for (const fruit of fruits) {
      const type = fruit.fruitType.toUpperCase();
      if (!fruitContainers[type]) {
        fruitContainers[type] = [];
      }
      fruitContainers[type].push(fruit.fruitName);
    }
  
    return fruitContainers;
  }
  
  const separatedFruits = separateFruitsByType(fruits);
  
  console.log("Jumlah wadah yang dibutuhkan:", Object.keys(separatedFruits).length);
  
  for (const type in separatedFruits) {
    console.log(`Wadah untuk buah tipe ${type}: ${separatedFruits[type].join(", ")}`);
  }
  