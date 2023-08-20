import React, { useState } from "react";

const tdata = {
  products: [
    {
      economic_status: "Rich",
      is_FK_Advantage_product: false,
      top_level_category: "Clothing",
      product_url:
        "http://www.flipkart.com/momin-libas-ak2414-kashibo-solid-abaya-no/p/itmej7ypx52wk3th?pid=ABQEJ7YQTNQGMXZV",
      uniq_id: "ba4264a63ff817717897b044bbdcbee7",
      product_name: "Momin Libas AK2414 Kashibo Solid Abaya No",
      description:
        "Key Features of Momin Libas AK2414 Kashibo Solid Abaya No Dress Length: 136 cm Fabric: Kashibo 1 Abaya,Momin Libas AK2414 Kashibo Solid Abaya No (Blue) Price: Rs. 2,398 Bilqis Pleated Keyhole Neck Blue Long Maxi Dress Abaya - SKU AK2414,Specifications of Momin Libas AK2414 Kashibo Solid Abaya No (Blue) General Brand Momin Libas Sleeve Full Sleeve Suitable For Working woman Fabric Kashibo Type Abaya Shade Blue Style Code AK2414 Pattern Solid With Hijab No Size L Color Blue In the box Sales Package 1 Abaya Dimensions weight 400 g Sleeve Length 60 cm Dress Length 136 cm Additional Features Fabric Care Wash and iron",
      overall_rating: null,
      retail_price: 3999,
      image:
        '["http://img5a.flixcart.com/image/abaya-burqa/5/w/y/ak2414-momin-libas-xl-1000x1000-imaej4saughaf7mz.jpeg", "http://img5a.flixcart.com/image/abaya-burqa/5/w/y/ak2414-momin-libas-xl-original-imaej4saughaf7mz.jpeg", "http://img6a.flixcart.com/image/abaya-burqa/5/w/y/ak2414-momin-libas-xl-original-imaej4sas2rggpty.jpeg", "http://img5a.flixcart.com/image/abaya-burqa/5/w/y/ak2414-momin-libas-xl-original-imaej4satyjg8hu8.jpeg"]',
      brand: "Momin Libas",
      product_rating: null,
      product_category_tree:
        '["Clothing >> Women\'s Clothing >> Ethnic Wear >> Abayas & Burqas >> Momin Libas Abayas & Burqas >> Momin Libas AK2414 Kashibo Solid Abaya No (Blue)"]',
      discounted_price: 2398,
      pid: "ABQEJ7YQTNQGMXZV",
      crawl_timestamp: "2016-06-12 08:33:38 +0000",
      specific_category: "Ethnic Wear",
      product_specifications:
        '{"product_specification"=>[{"key"=>"Brand", "value"=>"Momin Libas"}, {"key"=>"Sleeve", "value"=>"Full Sleeve"}, {"key"=>"Suitable For", "value"=>"Working woman"}, {"key"=>"Fabric", "value"=>"Kashibo"}, {"key"=>"Type", "value"=>"Abaya"}, {"key"=>"Shade", "value"=>"Blue"}, {"key"=>"Style Code", "value"=>"AK2414"}, {"key"=>"Pattern", "value"=>"Solid"}, {"key"=>"With Hijab", "value"=>"No"}, {"key"=>"Size", "value"=>"L"}, {"key"=>"Color", "value"=>"Blue"}, {"key"=>"Sales Package", "value"=>"1 Abaya"}, {"key"=>"weight", "value"=>"400 g"}, {"key"=>"Sleeve Length", "value"=>"60 cm"}, {"key"=>"Dress Length", "value"=>"136 cm"}, {"key"=>"Fabric Care", "value"=>"Wash and iron"}]}',
    },
    {
      product_name: "Gee & Bee Casual Printed Women's Kurti",
      product_category_tree:
        '["Clothing >> Women\'s Clothing >> Ethnic Wear >> Kurtas & Kurtis >> Kurtis >> Gee & Bee Kurtis"]',
      retail_price: 2499,
      product_rating: null,
      discounted_price: 749,
      crawl_timestamp: "2016-01-06 18:20:45 +0000",
      product_specifications:
        '{"product_specification"=>[{"value"=>"1 Kurti"}, {"key"=>"Sleeve", "value"=>"3/4 Sleeve"}, {"key"=>"Number of Contents in Sales Package", "value"=>"Pack of 1"}, {"key"=>"Region", "value"=>"Kolkata"}, {"key"=>"Fabric", "value"=>"Cotton"}, {"key"=>"Type", "value"=>"A-line"}, {"key"=>"Neck", "value"=>"Square Neck"}, {"key"=>"Pattern", "value"=>"Printed"}, {"key"=>"Occasion", "value"=>"Casual"}, {"key"=>"Ideal For", "value"=>"Women\'s"}, {"value"=>"Wash with Similar Colors"}]}',
      specific_category: "Ethnic Wear",
      pid: "KRTEBFRQEW73G6BA",
      description:
        "Gee & Bee Casual Printed Women's Kurti\n                         Price: Rs. 749\n\t\t\t\t\n\t\t\tGee & Bee Presents 100% cotton Womens Kurtis with premium qality fabric and in ozone free dyes\nGee & Bee Presents 100% cotton Womens Kurtis with premium qality fabric and in ozone free dyes",
      uniq_id: "89904d9fd021a498f519fbcbfc654504",
      overall_rating: null,
      image:
        '["http://img6a.flixcart.com/image/kurti/c/x/z/1-1-e13-gee-bee-m-original-imaeazcg4d4vyewh.jpeg", "http://img5a.flixcart.com/image/kurti/c/x/z/1-1-e13-gee-bee-m-original-imaeazcg4d4vyewh.jpeg", "http://img5a.flixcart.com/image/kurti/c/x/z/1-1-e13-gee-bee-m-original-imaeazcgpghgzyjj.jpeg", "http://img5a.flixcart.com/image/kurti/c/x/z/1-1-e13-gee-bee-m-original-imaeazcjbafjfwrt.jpeg"]',
      is_FK_Advantage_product: false,
      product_url:
        "http://www.flipkart.com/gee-bee-casual-printed-women-s-kurti/p/itmebfrqzdzasgbe?pid=KRTEBFRQEW73G6BA",
      brand: null,
      top_level_category: "Clothing",
      economic_status: "Rich",
    },
    {
      uniq_id: "1f772435482dc2469655db107d95f045",
      specific_category: "Ethnic Wear",
      image:
        '["http://img5a.flixcart.com/image/kurti/h/y/z/1-1-e17-gee-bee-l-original-imaeazcgxh7fbsce.jpeg", "http://img6a.flixcart.com/image/kurti/h/y/z/1-1-e17-gee-bee-l-original-imaeazcgtj7vzt5h.jpeg", "http://img5a.flixcart.com/image/kurti/h/y/z/1-1-e17-gee-bee-l-original-imaeazcjz4n82ycx.jpeg"]',
      product_rating: null,
      product_name: "Gee & Bee Casual Printed Women's Kurti",
      description:
        "Gee & Bee Casual Printed Women's Kurti\n                         Price: Rs. 649\n\t\t\t\t\n\t\t\tGee & Bee Presents 100% cotton Womens Kurtis with premium qality fabric and in ozone free dyes\nGee & Bee Presents 100% cotton Womens Kurtis with premium qality fabric and in ozone free dyes",
      overall_rating: null,
      crawl_timestamp: "2016-01-06 18:20:45 +0000",
      product_category_tree:
        '["Clothing >> Women\'s Clothing >> Ethnic Wear >> Kurtas & Kurtis >> Kurtis >> Gee & Bee Kurtis"]',
      brand: null,
      pid: "KRTEBFRQVB9NCSSH",
      product_url:
        "http://www.flipkart.com/gee-bee-casual-printed-women-s-kurti/p/itmebfrqbywzqzxz?pid=KRTEBFRQVB9NCSSH",
      product_specifications:
        '{"product_specification"=>[{"value"=>"1 Kurti"}, {"key"=>"Sleeve", "value"=>"Sleeveless"}, {"key"=>"Number of Contents in Sales Package", "value"=>"Pack of 1"}, {"key"=>"Region", "value"=>"Kolkata"}, {"key"=>"Fabric", "value"=>"Cotton"}, {"key"=>"Type", "value"=>"A-line"}, {"key"=>"Neck", "value"=>"Round Neck"}, {"key"=>"Pattern", "value"=>"Printed"}, {"key"=>"Occasion", "value"=>"Casual"}, {"key"=>"Ideal For", "value"=>"Women\'s"}, {"value"=>"Wash with Similar Colors"}]}',
      retail_price: 2164,
      top_level_category: "Clothing",
      discounted_price: 649,
      economic_status: "Rich",
      is_FK_Advantage_product: false,
    },
    {
      image:
        '["http://img5a.flixcart.com/image/lehenga-choli/p/z/r/sf-01254-fashion-bazar-42-1000x1000-imaehyfsf3fz5nb2.jpeg", "http://img6a.flixcart.com/image/lehenga-choli/p/z/r/sf-01254-fashion-bazar-42-original-imaehyfsf3fz5nb2.jpeg", "http://img6a.flixcart.com/image/lehenga-choli/p/z/r/sf-01254-fashion-bazar-42-original-imaeh39g5xzedhxn.jpeg", "http://img5a.flixcart.com/image/lehenga-choli/p/z/r/sf-01254-fashion-bazar-42-original-imaeh39ghfd73wzm.jpeg", "http://img6a.flixcart.com/image/lehenga-choli/p/z/r/sf-01254-fashion-bazar-42-original-imaeh39gunhuuneb.jpeg"]',
      uniq_id: "e663dada25a5767ec66e762c2b01b4b5",
      pid: "LCHEH4GTFX23CPZR",
      specific_category: "Ethnic Wear",
      product_url:
        "http://www.flipkart.com/fashion-bazar-self-design-women-s-lehenga-choli/p/itmeh4gtdhktyavs?pid=LCHEH4GTFX23CPZR",
      economic_status: "Rich",
      product_rating: null,
      overall_rating: null,
      description:
        "Key Features of fashion bazar Self Design Women's Lehenga Choli Lehenga Fabric: Raw silk, Net Brand Color: Pink,Specifications of fashion bazar Self Design Women's Lehenga Choli General Details Ideal For Women's Pattern Self Design Lehenga Choli Details Type Lehenga Choli Lehenga Fabric Raw silk, Net In the Box 1 Lehengha choli",
      product_specifications:
        '{"product_specification"=>[{"key"=>"Ideal For", "value"=>"Women\'s"}, {"key"=>"Pattern", "value"=>"Self Design"}, {"key"=>"Type", "value"=>"Lehenga Choli"}, {"key"=>"Lehenga Fabric", "value"=>"Raw silk, Net"}, {"value"=>"1 Lehengha choli"}]}',
      is_FK_Advantage_product: false,
      top_level_category: "Clothing",
      crawl_timestamp: "2016-03-25 15:39:25 +0000",
      product_category_tree:
        "[\"Clothing >> Women's Clothing >> Ethnic Wear >> Lehenga Cholis >> Lehenga Cholis >> fashion bazar Lehenga Cholis >> fashion bazar Self Design Women's Lehenga Choli\"]",
      product_name: "fashion bazar Self Design Women's Lehenga Choli",
      brand: "fashion bazar",
      retail_price: 4999,
      discounted_price: 1599,
    },
    {
      crawl_timestamp: "2016-03-25 15:39:25 +0000",
      product_url:
        "http://www.flipkart.com/sohardhastshilp-self-design-women-s-lehenga-choli-dupatta-set/p/itmegxzzjxwmmurq?pid=LCHEGYYBWP4ECBZJ",
      economic_status: "Rich",
      product_rating: null,
      product_name:
        "Sohardhastshilp Self Design Women's Lehenga, Choli and Dupatta Set",
      uniq_id: "aa944c7fea4dc4aad0c0ea70b25734e4",
      image:
        '["http://img6a.flixcart.com/image/lehenga-choli/4/k/y/80-sohardhastshilp-32-original-imaegxuhdmbzf3rr.jpeg", "http://img5a.flixcart.com/image/lehenga-choli/4/k/y/80-sohardhastshilp-32-original-imaegxuhdmbzf3rr.jpeg", "http://img5a.flixcart.com/image/lehenga-choli/p/v/d/80-sohardhastshilp-36-original-imaegxuhzxcwgzfg.jpeg", "http://img6a.flixcart.com/image/lehenga-choli/z/b/h/80-sohardhastshilp-30-original-imaegxuhuhsjrpzw.jpeg"]',
      is_FK_Advantage_product: false,
      description:
        "Key Features of Sohardhastshilp Self Design Women's Lehenga, Choli and Dupatta Set Lehenga Fabric: Synthetic Brand Color: Blue, Pink,Specifications of Sohardhastshilp Self Design Women's Lehenga, Choli and Dupatta Set Lehenga Choli Details Lehenga Fabric Synthetic Type Lehenga, Choli and Dupatta Set General Details Pattern Self Design Ideal For Women's In the Box 1 Lehenga, 1 Choli, 1 Dupatta Set",
      specific_category: "Ethnic Wear",
      product_category_tree:
        "[\"Clothing >> Women's Clothing >> Ethnic Wear >> Lehenga Cholis >> Lehenga Cholis >> Sohardhastshilp Lehenga Cholis >> Sohardhastshilp Self Design Women's Lehenga, Cho...\"]",
      top_level_category: "Clothing",
      product_specifications:
        '{"product_specification"=>[{"key"=>"Lehenga Fabric", "value"=>"Synthetic"}, {"key"=>"Type", "value"=>"Lehenga, Choli and Dupatta Set"}, {"key"=>"Pattern", "value"=>"Self Design"}, {"key"=>"Ideal For", "value"=>"Women\'s"}, {"value"=>"1 Lehenga, 1 Choli, 1 Dupatta Set"}]}',
      retail_price: 2000,
      overall_rating: null,
      brand: "Sohardhastshilp",
      discounted_price: 1770,
      pid: "LCHEGYYBWP4ECBZJ",
    },
  ],
};

const ProductList = ({ data }) => {
  console.log("data is consoled here " + data);

  const handleChange = (e) => {
    ///code here...
  }

  const [productListData, SetProductListData] = useState(data);

  return (
    <div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-secondary">
          Here are your products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productListData.products.map((product) => (
            <div key={product.uniq_id} className="group relative">
              <div className="h-[380px] w-[280px] overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={JSON.parse(product.image)[0]}
                  alt={product.product_name}
                  className="w-[280px]"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-secondary">
                    <a href={product.product_url}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.product_name}
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-secondary">
                  {product.retail_price}
                </p>
              </div>
              <div className="flex justify-center">
                <button className="mt-8 hover:bg-yellow-200 text-primary bg-yellow-500 px-10 rounded-full text-[17px] font-medium text-center"
                onClick={() => handleChange(product.product_name)}>
                  Show similar products
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
