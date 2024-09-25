import { ISensor } from "./ISensor";
import MACHINE from "./sensorSchema";
import { IFilter } from "../../shared/utils/IFilter";
import { paginatedResults } from "../../middlewares/paginateResults";

class SensorDBQuery {
  createNewMachine = async (MachineInfo: ISensor) => {
    return await MACHINE.create(MachineInfo);
  };
  getAllMachines = async (filter: IFilter) => {
    return await paginatedResults(filter, MACHINE);
  };

  getMachine = async (id: string) => {
    return Promise.resolve(await MACHINE.findById(id).populate("profile"));
  };

  edit = async (id: string, MachineInfo: ISensor) => {
    return Promise.resolve(
      await MACHINE.findOneAndUpdate({ _id: id }, MachineInfo),
    );
  };

  delete = async (id: string) => {
    return Promise.resolve(await MACHINE.findOneAndDelete({ _id: id }));
  };
}

export default new SensorDBQuery();
