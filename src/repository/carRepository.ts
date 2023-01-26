import db from "../config/database.js";
import prisma from "../config/db.js";

async function getCars() {
 return prisma.cars.findMany()
}

async function getCar(id: number) {
  return prisma.cars.findUnique({
    where: {
      id : id
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {
 return prisma.cars.findUnique({
   where: {
      licensePlate: licensePlate
    } 
    }
  )
}



async function createCar(model: string, licensePlate: string, year: string, color: string) {

  const newCar = { model, licensePlate, year, color }

  return prisma.cars.create({data: 
    newCar
  })
  
}

async function deleteCar(id: number) {
  return prisma.cars.delete({
    where: {
    id : id
  }})
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;