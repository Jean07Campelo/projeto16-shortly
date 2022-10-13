import dayjs from "dayjs";

function generateDate() {
  return dayjs(Date.now()).locale("pt").format("YYYY-MM-DD HH:mm");
}

export { generateDate };
