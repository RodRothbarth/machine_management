import { ISensor } from "./ISensor";
import MachineDBQuery from "./sensorDBQuery";
import { IFilter, PaginatedDTO } from "../../shared/utils/IFilter";

class SensorService {
  createNewMachine = async (machineInfo: ISensor) => {
    return await MachineDBQuery.createNewMachine(machineInfo);
  };

  editMachine = async (id: string, machineInfo: ISensor): Promise<ISensor> => {
    return await MachineDBQuery.edit(id, machineInfo);
  };

  getMachine = async (id: string): Promise<ISensor> => {
    return await MachineDBQuery.getMachine(id);
  };

  getAllMachines = async (query: any): Promise<PaginatedDTO> => {
    const filter: IFilter = {
      orderBy: query.orderBy || "name",
      order: query.order || "desc",
    };

    return await MachineDBQuery.getAllMachines(filter);
  };
  deleteMachine = async (id: string): Promise<any> => {
    return await MachineDBQuery.delete(id);
  };
}

export default new SensorService();
