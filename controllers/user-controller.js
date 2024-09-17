//controller is to handle business  logic
import { userModel } from "../schema/user-schema.js";
export const POST = async (request, response) => {
  try {
    const { firstname, lastname, email, course, school } = request.body;
    const createUser = await userModel.create({
      firstname,
      lastname,
      email,
      course,
      school,
    });
    if (!createUser) {
      return response.status(400).send({ message: "error create" });
    }

    return response.status(200).send(createUser);
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};

export const GET = async (request, response) => {
  try {
    const getAllUser = await userModel.find({});

    return response.status(200).send(getAllUser);
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};

export const GETID = async (request, response) => {
  try {
    const { id } = request.params;

    const findById = await userModel.findById(id);

    if (!findById) {
      return response.status(404).send({ message: "User not found" });
    }

    return response.status(200).send(findById);
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};

export const UPDATE = async (request, response) => {
  try {
    const { id } = request.params;
    const { firstname, lastname, email, course, school } = request.body;

    const updateUser = await userModel.findByIdAndUpdate(
      id,
      {
        firstname,
        lastname,
        email,
        course,
        school,
      },
      { new: true }
    );

    if (!updateUser) {
      return response.status(400).send({ message: "error update" });
    }

    return response.status(200).send(updateUser);
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};

export const DELETE = async (request, response) => {
  try {
    const { id } = request.params;

    const deleteUserById = await userModel.findByIdAndDelete(id);

    if (!deleteUserById) {
      return response.status(400).send({ message: "error update" });
    }

    return response.status(200).send({ message: "Sucess Deleted" });
  } catch (e) {
    return response.status(500).send({ message: e.message });
  }
};
