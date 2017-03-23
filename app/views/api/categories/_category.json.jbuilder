
json.extract! category
json.products category.products do |product|
  json.extract! product
end
