import { Request, Response } from "express";
import usedata from "../Model/model";

const getall = async (req: Request, res: Response): Promise<Response> => {
  try {
    const get = await usedata.find();
    return res.status(200).json({
      message: "Successfully gotten data",
      data: get,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const postdata = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { Name, admissionNo, session, class_1_6 } = req.body;
    const post = await usedata.create({
      Name,
      admissionNo:
        (await Math.floor(Math.random() * 100000) + (await usedata.count()) + 1),
      session: 2021 / 2022,
      class_1_6,
    });

    return res.status(201).json({
      message: "Successfully posted",
      data: post,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const getone = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getonedat = await usedata.findById(req.params.id);
    return res.status(201).json({
      message: "Successfully gotten data",
      data: getonedat,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const updatedata = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { Name, admissionNo, session, class_1_6 } = req.body;
    const update = await usedata.findByIdAndUpdate(
      req.params.id,
      {
        Name,
        admissionNo: usedata.length + 1,
        session: 2021 / 2022,
        class_1_6,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "Successfully updated",
      data: update,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

const deletedata = async (req: Request, res: Response): Promise<Response> => {
  try {
    const deletedata = await usedata.findByIdAndDelete(req.params.id);

    return res.status(201).json({
      message: "Successfully deleted " + req.params.id,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export { getall, getone, postdata, updatedata, deletedata };
