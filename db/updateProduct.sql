update products
set product_name = $2,
    product_price = $3,
    product_img = $4
where product_id =$1
returning *;