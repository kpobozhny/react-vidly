import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items) //render array to a lodash object
    .slice(startIndex) //cut array starting from StartIndex
    .take(pageSize) //cut array containing pagSize items only
    .value(); //render lodash object to a regular array
}
