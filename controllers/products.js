import { find } from "../models/product.js";

const getAllProducts = async (req, res) => {
  const { company, name, sort, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  let apiData = find(queryObject);
  if (sort) {
    let sortFix = sort.replace(",", " ");
    apiData = apiData.sort(sortFix);
  }
  console.log(queryObject);
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

const getAllProductsTesting = async (req, res) => {
  const myData = await find(req.query).select("name");
  res.status(200).json({ myData });
};
export default { getAllProducts, getAllProductsTesting };
