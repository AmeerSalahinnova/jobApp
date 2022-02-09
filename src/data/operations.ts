import { writeFile, readFile } from "fs/promises";
import { v4 as uuidv4 } from "uuid";

export const getData = async () => {
  try {
    const res = await readFile("./jobs.json", "utf8");
    console.log(res);
    const jsonData = JSON.parse(res); // now it an object
    return jsonData;
  } catch (err) {
    throw new Error("error while reading data");
  }
};

export const createDate = async (incomingData: any) => {
  try {
    const data = await getData();
    const jobs = data.jobs;
    const founded = jobs.find((item: any) => item.id === incomingData.id);
    if (!founded) {
      jobs.push({ uuid: uuidv4(), ...incomingData });
      data.jobs = jobs;
      const res = await writeFile("jobs.json", JSON.stringify(data));
      return res;
    }else{
      return "already exist";
    }
  } catch (err) {
    console.error(err);
    throw new Error("error while writing data");
  }
};
