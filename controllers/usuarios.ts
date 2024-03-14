import { Request, Response } from "express";
import Usuario from "../models/usauario";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();

  res.json({
    usuarios,
  });
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    res.json({
      usuario,
    });
  }else {
    res.status(404).json({
        msg: 'User not found '
    })
  }
};

export const postUsuario = (req: Request, res: Response) => {
  const { body } = req;

  res.json({
    msg: "Post - Usuario",
    body,
  });
};

export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  // const { nombre } = req.body;

  res.json({
    msg: "Put - Usuario",
    id,
  });
};

export const deleteUsuarios = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "Delete - Usuarios",
    id,
  });
};
