import { ADD_TO_CART, FILTER_PRODUCTS } from "../actions/types";

const INITIAL_STATE = {
  stock: [
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847696023622,
      price: "40.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",
      color: "Rose Nude",
      size: "L",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847695958086,
      price: "40.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",
      color: "Rose Nude",
      size: "M",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847695892550,
      price: "40.00 EUR",
      availability: "out of stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",
      color: "Rose Nude",
      size: "S",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847695827014,
      price: "40.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",
      color: "Rose Nude",
      size: "XS",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847696056390,
      price: "40.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",
      color: "Black",
      size: "XL",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847695990854,
      price: "40.00 EUR",
      availability: "out of stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",
      color: "Black",
      size: "L",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847695925318,
      price: "40.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",
      color: "Black",
      size: "M",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847695859782,
      price: "40.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",
      color: "Black",
      size: "S",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847695794246,
      price: "40.00 EUR",
      availability: "out of stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_black_web_1.jpg?v=1585820383",
      color: "Black",
      size: "XS",
    },
    {
      title: "Organic Cotton Triangle Bra",
      id: 19847696089158,
      price: "40.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/w_oc_trianglebra_nude_web_1_a580eae0-be6f-488c-895b-9530c8964965.jpg?v=1585820383",
      color: "Rose Nude",
      size: "XL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700316230,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",
      color: "Black",
      size: "XL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700414534,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",
      color: "Navy",
      size: "XL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847699890246,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",
      color: "Black",
      size: "S",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700021318,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",
      color: "Black",
      size: "M",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700185158,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",
      color: "Black",
      size: "L",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700676678,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",
      color: "Navy",
      size: "XXL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700447302,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_black_web_5.jpg?v=1574888373",
      color: "Black",
      size: "XXL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847699923014,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",
      color: "White",
      size: "S",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700086854,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",
      color: "White",
      size: "M",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700217926,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",
      color: "White",
      size: "L",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700348998,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",
      color: "White",
      size: "XL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700512838,
      price: "33.00 EUR",
      availability: "out of stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_white_web_3.jpg?v=1574888390",
      color: "White",
      size: "XXL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847699955782,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",
      color: "Grey",
      size: "S",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700119622,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",
      color: "Grey",
      size: "M",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700250694,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",
      color: "Grey",
      size: "L",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700381766,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",
      color: "Grey",
      size: "XL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700611142,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/organic_basics_mens_organic_cotton_tee_grey_web_3.jpg?v=1574888390",
      color: "Grey",
      size: "XXL",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847699988550,
      price: "33.00 EUR",
      availability: "out of stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",
      color: "Navy",
      size: "S",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700152390,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",
      color: "Navy",
      size: "M",
    },
    {
      title: "Organic Cotton Tee",
      id: 19847700283462,
      price: "33.00 EUR",
      availability: "in stock",
      image_link:
        "https://cdn.shopify.com/s/files/1/0076/7800/1222/products/m_oc_tee_navy_web_2.jpg?v=1574888390",
      color: "Navy",
      size: "L",
    },
  ],
  addedItems: [],
  totalPrice: 0,
  filteredItems: [],
  colors: ["Black", "Navy", "Rose Nude", "Grey", "White"],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (action.payload.availability !== "out of stock") {
        let addedItem = state.stock.find(
          (item) => item.id === action.payload.id
        );
        let onCartItem = state.addedItems.find(
          (item) => action.payload.id === item.id
        );
        if (onCartItem) {
          addedItem.quantity += 1;
          return {
            ...state,
            totalPrice:
              state.totalPrice +
              parseFloat(addedItem.price.match("-?[0-9]+[.]*[0-9]*")),
          };
        } else {
          addedItem.quantity = 1;

          return {
            ...state,
            addedItems: [...state.addedItems, addedItem],
            totalPrice:
              state.totalPrice +
              parseFloat(addedItem.price.match("-?[0-9]+[.]*[0-9]*")),
          };
        }
      }
    }
    case FILTER_PRODUCTS: {
      const filteredItems = state.stock.filter((item) => {
        console.log("My actual item is");
        // console.log(item);
        return item[action.payload.filterBy] === action.payload.filterValue;
      });

      return { ...state, filteredItems: filteredItems };
    }
    default: {
      return { ...state, filteredItems: state.stock };
    }
  }
};
