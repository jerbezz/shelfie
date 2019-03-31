insert into products
(product_name,
product_price,
product_img
) values (
    $1,
    $2,
    $3
)
returning *;