import { countries } from "countries-list";
import pickRandom from "pick-random";
import * as R from "ramda";

export const getRandomCountry = (): string => {
  const countriesBesidesAfrica = R.pipe(
    R.values,
    // @ts-ignore
    R.reject(R.propEq("continent", "AF"))
  )(countries) as any[];

  const [randomCountry] = pickRandom(countriesBesidesAfrica);

  return randomCountry.name;
};
