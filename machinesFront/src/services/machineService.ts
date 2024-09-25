import { http } from "./http.ts";
import { filterType } from "../utils/filterType.ts";

type IMachine = {
  name: string;
  type: string;
};
export async function createMachine(machineInfo: IMachine) {
  return await http.post(`/machine`, machineInfo);
}

export async function getAllMachines(filter: filterType) {
  const { data } = await http.get(
    `/machine?orderBy=${filter.sort.orderBy}&order=${filter.sort.order}`,
  );
  return data;
}

export async function getAllSensors(filter: filterType) {
  const { data } = await http.get(
    `/sensor?orderBy=${filter.sort.orderBy}&order=${filter.sort.order}`,
  );
  return data;
}
