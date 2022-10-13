import dayjs from "dayjs";

function gerateDate() {
  return dayjs(Date.now()).locale("pt").format("YYYY-MM-DD HH:mm");
}

export { gerateDate };
