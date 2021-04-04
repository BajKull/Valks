import { categories } from "../components/categories";

const images = categories.map((category) => {
  return {
    name: category,
    svg: require(`!@svgr/webpack!../images/categories/${category}.svg`).default,
  };
});

export { images };
