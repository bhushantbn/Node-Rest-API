import Product from "../models/product.js"; // ✅ Correct import

export const getAllProducts = async (req, res) => {
  const { company, name, sort, select } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObject); // ✅ Use `Product.find()`

  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 5;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);
  const myData = await apiData;

  res.status(200).json({ myData, perPage: myData.length });
};

export const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).select("name"); // ✅ Use `Product.find()`
  res.status(200).json({ myData });
};

export default { getAllProducts, getAllProductsTesting };
