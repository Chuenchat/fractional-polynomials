import { Coefficient } from "./type";

export const polynomialDegree1 = (c: Coefficient): string => {
  const a = c.a;
  const b = c.b;
  let s = "";

  // Handling the a coefficient
  if (a !== 0) {
    if (a === 1) {
      s += "x";
    } else if (a === -1) {
      s += "-x";
    } else {
      s += `${a}x`;
    }
  }

  // Handling the b coefficient
  if (b !== 0) {
    if (b > 0 && s !== "") {
      s += " + ";
    } else if (b < 0) {
      s += " - ";
    }
    s += Math.abs(b);
  }

  // If the polynomial is zero
  if (s === "") {
    s = "0";
  }

  return s;
};

export const polynomialDegree2 = (cs: [Coefficient, Coefficient]): string => {
  const a = cs[0].a * cs[1].a;
  const b = cs[0].a * cs[1].b + cs[0].b * cs[1].a;
  const c = cs[0].b * cs[1].b;
  let s = "";

  // Handling the a coefficient
  if (a !== 0) {
    if (a === 1) {
      s += "x^2";
    } else if (a === -1) {
      s += "-x^2";
    } else {
      s += `${a}x^2`;
    }
  }

  // Handling the b coefficient
  if (b !== 0) {
    if (b > 0 && s !== "") {
      s += " + ";
    } else if (b < 0) {
      s += " - ";
    }
    const absB = Math.abs(b);
    if (absB === 1) {
      s += "x";
    } else {
      s += `${absB}x`;
    }
  }

  // Handling the c coefficient
  if (c !== 0) {
    if (c > 0 && s !== "") {
      s += " + ";
    } else if (c < 0) {
      s += " - ";
    }
    s += Math.abs(c);
  }

  // If the polynomial is zero
  if (s === "") {
    s = "0";
  }

  return s;
};
