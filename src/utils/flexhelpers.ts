import { FlexProps } from "../types";

export const getSpacing = ({
  p = -999,
  pt = -999,
  pl = -999,
  pr = -999,
  pb = -999,
  px = -999,
  py = -999,
  m = -999,
  mt = -999,
  ml = -999,
  mr = -999,
  mb = -999,
  mx = -999,
  my = -999,
}: FlexProps) => {
  let result = {};
  if (pt !== -999) {
    result = {
      ...result,
      paddingTop: getValue(pt),
    };
  }
  if (pb !== -999) {
    result = {
      ...result,
      paddingBottom: getValue(pb),
    };
  }
  if (pl !== -999) {
    result = {
      ...result,
      paddingLeft: getValue(pl),
    };
  }
  if (pr !== -999) {
    result = {
      ...result,
      paddingRight: getValue(pr),
    };
  }

  if (px !== -999) {
    result = {
      ...result,
      paddingRight: getValue(px),
      paddingLeft: getValue(px),
    };
  }
  if (py !== -999) {
    result = {
      ...result,
      paddingTop: getValue(py),
      paddingBottom: getValue(py),
    };
  }

  if (p !== -999) {
    result = {
      padding: getValue(p),
    };
  }

  if (mt !== -999) {
    result = {
      ...result,
      marginTop: getValue(mt),
    };
  }
  if (mb !== -999) {
    result = {
      ...result,
      marginBottom: getValue(mb),
    };
  }
  if (ml !== -999) {
    result = {
      ...result,
      marginLeft: getValue(ml),
    };
  }
  if (mr !== -999) {
    result = {
      ...result,
      marginRight: getValue(mr),
    };
  }

  if (mx !== -999) {
    result = {
      ...result,
      marginRight: getValue(mx),
      marginLeft: getValue(mx),
    };
  }
  if (my !== -999) {
    result = {
      ...result,
      marginTop: getValue(my),
      marginBottom: getValue(my),
    };
  }
  if (m !== -999) {
    result = {
      ...result,
      margin: getValue(m),
    };
  }

  return result;
};

export const getValue = (property: string | number) =>
  typeof property === "string"
    ? property
    : property === 0
    ? property
    : `${property}rem`;
