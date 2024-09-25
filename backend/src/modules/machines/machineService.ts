import { IMachine } from "./IMachine";
import MachineDBQuery from "./machineDBQuery";
import { IFilter } from "../../shared/utils/IFilter";

class MachineService {
  createNewMachine = async (machineInfo: IMachine) => {
    return await MachineDBQuery.createNewMachine(machineInfo);
  };

  editMachine = async (
    id: string,
    machineInfo: IMachine,
  ): Promise<IMachine> => {
    return await MachineDBQuery.edit(id, machineInfo);
  };

  getMachine = async (id: string): Promise<IMachine> => {
    return await MachineDBQuery.getMachine(id);
  };

  getAllMachines = async (query: any): Promise<IMachine[]> => {
    const filter: IFilter = {
      orderBy: query.orderBy || "name",
      order: query.order || "desc",
      page: query.page,
      limit: query.limit,
      populate: { path: "profile" },
      value: query.value
        ? {
            $or: [
              { name: { $regex: query.value, $options: "i" } },
              { email: { $regex: query.value, $options: "i" } },
              { supvCode: { $regex: query.value, $options: "i" } },
            ],
          }
        : {},
    };

    return await MachineDBQuery.getAllMachines(filter);
  };
  deleteMachine = async (id: string): Promise<any> => {
    return await MachineDBQuery.delete(id);
  };
}

export default new MachineService();
