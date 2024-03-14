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

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const existeCorreo = await Usuario.findOne({
        where: {
            correo: body.correo
        }

     });

     if(existeCorreo){
        return res.status(400).json({
            msg: 'El correo ya se encuentra registrado'
     });
     }
    const usuario = await Usuario.create(body);
    await usuario.save();

    res.json({
    msg: "Post - Usuario",
    body,
  });
  } catch (error) {
    console.log(error);
        res.status(404).json({
            msg: 'Upss!! Algo salío mal.'
        })
  }

  
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    
    const usuario = await Usuario.findByPk(id);
    if(!usuario){
        return res.status(404).json({
            msg: 'No existe el usuario con ID' + id
        })
    }

    await usuario.update(body);

    res.json({
    msg: "Put - Usuario",
    usuario
  });
  } catch (error) {
    console.log(error);
        res.status(404).json({
            msg: 'Upss!! Algo salío mal.'
        })
  }
};

export const deleteUsuarios = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "Delete - Usuarios",
    id,
  });
};
