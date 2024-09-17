import { BookModel } from "../schema/boook-schema.js";
export const CreateBook = async (request, response) => {
  try {
    const { title, date } = request.body;
    const createBook = await BookModel.create({ title, date });
    if (!createBook) {
      return response.status(400).send({ message: "error create" });
    }

    return response.status(200).send({ message: createBook });
  } catch (error) {
    return response.status(500).send({ message: error });
  }
};

export const GetAllBook = async (request, response) => {
  try {
    const findAllBook = await BookModel.find({});

    return response.status(200).send(findAllBook);
  } catch (error) {
    return response.status(500).send({ message: error });
  }
};

export const UpdateById = async (request, response) => {
  try {
    const { id } = request.params;
    const { title, date } = request.body;
    const updateById = await BookModel.findByIdAndUpdate(
      id,
      {
        title,
        date,
      },
      { new: true }
    );

    if (!updateById) {
      return response.status(400).send({ message: "error update" });
    }

    return response.status(200).send(updateById);
  } catch (error) {
    return response.status(500).send({ message: error });
  }
};

export const DeleteById = async (request, response) => {
  try {
    const { id } = request.params;
    const findByIdAndDelete = await BookModel.findByIdAndDelete(id);

    if (!findByIdAndDelete) {
      return response.status(400).send({ message: "error delete" });
    }

    return response.status(200).send({ message: "sucess  delete" });
  } catch (error) {
    return response.status(500).send({ message: error });
  }
};
