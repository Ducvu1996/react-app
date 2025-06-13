const categories = [
  {
    id: 1,
    title: "Cây Cảnh Trong Nhà",
    description: "Hướng dẫn chọn và chăm sóc cây cảnh phù hợp với không gian sống",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411"
  },
  {
    id: 2,
    title: "Vườn Rau Tại Gia",
    description: "Kỹ thuật trồng và chăm sóc rau sạch tại nhà",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9"
  },
  {
    id: 3,
    title: "Hoa Cảnh",
    description: "Chia sẻ về các loại hoa đẹp và cách chăm sóc",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  }
];

// Get all categories
const getAllCategories = (req, res) => {
  res.json(categories);
};

// Get category by id
const getCategoryById = (req, res) => {
  const category = categories.find(c => c.id === parseInt(req.params.id));
  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }
  res.json(category);
};

module.exports = {
  getAllCategories,
  getCategoryById
}; 