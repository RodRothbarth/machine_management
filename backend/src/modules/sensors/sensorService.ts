import { ISensor } from "./ISensor";
import MachineDBQuery from "./sensorDBQuery";
import { IFilter, PaginatedDTO } from "../../shared/utils/IFilter";

class SensorService {
  createNewSensor = async (machineInfo: ISensor) => {
    return await MachineDBQuery.createNewMachine(machineInfo);
  };

  editSensor = async (id: string, machineInfo: ISensor): Promise<ISensor> => {
    return await MachineDBQuery.edit(id, machineInfo);
  };

  getSensor = async (id: string): Promise<ISensor> => {
    return await MachineDBQuery.getMachine(id);
  };

  getAllSensor = async (query: any): Promise<PaginatedDTO> => {
    const filter: IFilter = {
      orderBy: query.orderBy || "name",
      order: query.order || "desc",
    };

    return await MachineDBQuery.getAllMachines(filter);
  };
  deleteSensor = async (id: string): Promise<any> => {
    return await MachineDBQuery.delete(id);
  };
}

export default new SensorService();
